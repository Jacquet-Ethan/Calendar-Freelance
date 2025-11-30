INSERT INTO freelancers (name, specialty, bio, avatar_url, linkedin, github, malt, portfolio) 
VALUES 
  ('Ethan Jacquet', 'Développeur', 'Passionnée par React et l''UX/UI. 5 ans d''expérience dans la création d''interfaces modernes et performantes. Spécialisée dans les applications web responsive.', 'https://imgs.search.brave.com/ZsNyrspSI3-DE-0o9tGKbKB-zne0FPw7nbH03UffN4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jMmMu/ZnAuZ3VpbmZyYS5j/b20vZmlsZS82ODJl/ZGI1NjVlOGQ2ZWU0/NDM1NDQyYzJveHEz/UldFTjAz', 'https://www.linkedin.com/in/ethan-jacquet-5728b7330/', 'https://github.com/Jacquet-Ethan', 'https://www.malt.fr/', NULL),
  ('Sabrina Dubois', 'Recherche emploi', NULL, 'https://imgs.search.brave.com/k29ZcVx2NapN_IF4Ey2nH6SW1egumeWloACIn78M1gs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgz/MjE1ODQzL2ZyL3Bo/b3RvL2lkJUMzJUE5/ZXMtZW4tdCVDMyVB/QXRlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz16aldpTE9n/QTJQZDFkcTdSQ2Ni/QXVIeC0wUldRdHFV/aGk3WElXRkR0cHlB/PQ', NULL, NULL, NULL, NULL);

INSERT INTO pricing (freelancer_id, title, description, price, duration)
VALUES
  (1, 'Consultation', 'Consultation 1h pour votre projet', 50.00, '1h'),
  (1, 'Audit Frontend', 'Audit complet de votre application React', 150.00, '3h'),
  (1, 'Développement', 'Développement sur mesure', 80.00, 'par heure'),
  (2, 'Conseil', 'Session de conseil personnalisée', 45.00, '1h');
