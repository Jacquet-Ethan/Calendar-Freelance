import Fastify from 'fastify';
import cors from '@fastify/cors';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import sql from './db.js';
import { Resend } from 'resend';
import 'dotenv/config';

const fastify = Fastify({
  logger: true
}).withTypeProvider<ZodTypeProvider>();

async function start() {
  await fastify.register(cors, {
    origin: true
  });
  fastify.get('/api/freelancers', async (request, reply) => {
    try {
      const freelancers = await sql`SELECT * FROM freelancers`;
      return freelancers;
    } catch (error) {
      fastify.log.error(error);
      reply.status(500).send({ error: 'Erreur lors de la récupération des freelancers', details: error });
    }
  });
  fastify.get('/api/freelancers/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const freelancer = await sql`SELECT * FROM freelancers WHERE id = ${id}`;
    return freelancer[0];
  });
  fastify.post('/api/bookings', async (request, reply) => {
    const { freelancer_id, booking_date, time_slot, client_first_name, client_email, client_phone, client_company } = request.body as any;
    const [booking] = await sql`
      INSERT INTO bookings (freelancer_id, booking_date, time_slot, client_first_name, client_email, client_phone, client_company)
      VALUES (${freelancer_id}, ${booking_date}, ${time_slot}, ${client_first_name}, ${client_email}, ${client_phone}, ${client_company})
      RETURNING *
    `;
    const resend = new Resend('re_dja69zP8_KaxhePkhmauFzPvVoL26Z5SV');
    async function sendEmail() {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: client_email,
        subject: 'Confirmation de votre rendez-vous',
        html: `
            <div>
              <p>Bonjour ${client_first_name},</p>
              <p>Votre rendez-vous est confirmé.</p>
              <p>Date: ${new Date(booking_date).toLocaleDateString('fr-FR')}</p>
              <p>Créneau: ${time_slot}</p>
              <p>Merci et à bientôt.</p>
            </div>
          `,
      });
    }
    await sendEmail();
    return booking;
  });
  try {
    await fastify.listen({ port: 4000, host: '0.0.0.0' });
    console.log('✅ Server started on http://localhost:4000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
