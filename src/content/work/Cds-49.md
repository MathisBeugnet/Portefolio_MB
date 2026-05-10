---
title: CDS 49
publishDate: 2019-12-01 00:00:00
img: /assets/CDS49.png
img_alt: Logo CDS 49
description: |
  Application lourde en C#
tags:
  - Dev
  - Design
---

## Application Client Lourd

> Développement d'une application C# Windows Forms pour l'auto-école CDS 49

### Contexte

L'auto-école CDS 49 (Chevrollier Driving School) s'est engagée dans une transformation numérique de ses services. Dans le cadre de ce projet, une solution multi-plateforme a été développée par une équipe de 3 personnes, incluant une application web PHP, une application mobile Flutter et une application client lourd C#, toutes connectées à une base de données MySQL centralisée.

J'ai pris en charge le développement de l'**application client lourd** destinée au personnel de l'auto-école, réalisée avec **C# Windows Forms** et l'ORM **Entity Framework Core** pour l'accès aux données.

### Solution réalisée

L'application permet au personnel administratif de gérer l'ensemble des données de l'auto-école depuis une interface de bureau :

- **Gestion des élèves** : consultation de la liste des élèves (lecture du CRUD), visualisation des forfaits souscrits par élève et activation d'un forfait.
- **Gestion des forfaits** : liste des forfaits existants avec possibilité de suppression.
- **Gestion des moniteurs** : création, consultation et modification des moniteurs, avec envoi automatique d'un email lors de l'ajout d'un nouveau moniteur.

L'application s'intègre dans l'architecture existante déployée sur un serveur Alpine Linux sous Docker, avec une base de données MariaDB mutualisée. La sécurité des accès a été travaillée en suivant les recommandations **OWASP**.

Le projet a été géré avec des outils collaboratifs (GitLab pour le versionning, Trello pour la planification) sur une durée de 9 séances.

### Compétences mises en avant

- C# / Windows Forms
- Entity Framework Core (ORM)
- Base de données MySQL / MariaDB
- Architecture client-serveur
- Sécurité applicative (OWASP)
- Travail en équipe et versionning (GitLab)
