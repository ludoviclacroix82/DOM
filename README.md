# DOM Exploration

Le modèle objet de document (DOM) connecte les pages Web à des scripts ou à des langages de programmation en représentant la structure d'un document.

## Chapters:

- [Introduction](./1.Introduction)
  - The DOM tree
  - Nodes
  - How to read a DOM tree using javascript
  - Accessing root level nodes
- [DOM Selectors](./2.Selectors)
  - `querySelector` and `querySelectorAll` methods
- [Creating nodes](./3.Create)
  - The `createElement` method
  - Inserting node
- [TheCollection project](/2.PROJECTS/2.TheCollection/readme.md)
  - Solo
- [Navigating the DOM](4.Navigate/readme.md)
- [Events](5.Events/readme.md)



### Introduction
Dessiner l'arborescence DOM correspondante page index.html

                                                Document
                ------------------------------------------------------------
              |                                                             | 
            HEAD                                                           BODY     
              |                              ---------------------------------------------------------------                                
            TITLE                            |                               |                              |               
                                           HEAD                             MAIN                          FOOTER
                                             |               -----------------------
                                             H1              |                      |       
                                             |             section               section                                      
                                          STRONG       ----------------    -------------------                   -            |              |   |                  |
                                                       H1             P   H2                 UL
                                                                                             |
                                                                                             LI