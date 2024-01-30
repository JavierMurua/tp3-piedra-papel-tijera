# Notas
## Comprensión
    Probablemente esto requiera usar un bucle que pida al usuario que escriba cuál de las 3 opciones elige, si el usuario ingresa una opción válida, la computadora eligirá una de las 3 opciones de forma aleatoria para jugar con el usuario, si el usuario escribe una opción no válida, se le vuelve a pedir que ingrese una opción válida.

    Si ambos eligen la misma opción, se considera empate y se vuelve a repetir la ronda.

    Si después de jugar una ronda, el ganador debe recibir un punto y quedar registrado ese punto.

    Cuando se jueguen 5 rondas, se decide al ganador imprimiendo un mensaje y se da por acabado el juego.

    Después se puede elegir volver a jugar.

    ### Simulación

        input = ventana("Escribe piedra, papel o tijera", "");

        si (input es válido) {
            La computadora jugará de forma aleatoria
            y se compara la elección de cada uno
        } sino {
            alerta("La opción ingresada no es válida")
            Se repite el turno
        }

        se compara la la elección de cada uno (input, computadora){
            si input === computadora{
                Empate
                Se repite el turno
            } sino si {
                input == "piedra" && computadora == "tijera"{
                    Jugador gana
                }

            } sino si {
                input == "papel" && computadora == "piedra" {
                    Jugador gana
                }
            } sino si {
                input == "tijera" && computadora == "papel"{
                    Jugador gana
                }

            } sino si {
                input == "piedra" && computadora == "papel"{
                    computadora gana
                }
            } sino si {
                input =="papel" && computadora == "tijera"{
                    Computadora gana
                }
            } sino {
                input == "tijera" && computadora == " piedra"{
                    computadora gana
                }
            }
        }

        Contador de rondas {
            si la ronda es válida{
                se descuenta 1 a número de rondas
            } sino {
                se reinicia la ronda
            }
        }

        Fin del juego {
            cuando el contador de rondas llega a cero{
                se decide al ganador
                se puede volver a jugar
            }
        }
    
    
## Plan
    ### Preguntas respondidas
    ¿Contra quién jugará el usuario?
        - Contra la computadora (Com).
    ¿Qué tipo de elección hará com?
        - Aleatoria.
    ¿Cómo ingresará el usuario los comandos?
        - Mediante un string.
    ¿Qué pasa si el usuario ingresa otra cosa que no sea una de las 3 opciones válidas (piedra, papel o tijera)
        - Se comprobará lo que haya ingresado el usuario y en caso de no ser una de las tres opciones, se pedirá que lo intente de nuevo.
    ¿Qué pasas si el usuario ingresa una opción válida pero con espaciado al principio o al final?
        - Se sacarán los espacios para que no entorpezcan el juego.
    ¿El ingreso del usuario es "case senitive"?
        - No.
    ¿Qué tipo de devolución obtendrá el usuario en caso de perder o ganar?
        - Un texto que aclara si ganó, empató o perdió y por qué.
    ¿Cómo resolver el empate?
        - Se vuelve a jugar.
    ¿Hay un límite de rondas?
        - Si, 5 rondas.
    ¿Qué para cuando se llega al límite de 5 rondas?
        - Se declara un ganador y se da la opción de volver a jugar
    ### Preguntas sin responder
    ¿Qué pasa si el usuario ingresa un emoji?
    ¿Qué pasa si el usuario escribe mal una de las opciones correctas?

## Fraccionamiento
    - [x] El usuario ingresa una opción.
    - [x] Se pasa a minúscula y se sacan los espacios.
    - [x] Se comprueba si la opcón es válida.
    - [x] Si la opción no es válida, se repite el ingreso por parte del usuario.
    - [x] La computadora eliege una de las 3 opciones de forma aleatoria.
    - [x] Se comparan las opciones del usuario y de la computadora.
    - [x] Se suma un punto al ganador de la ronda y se descuenta una ronda de las 5.
    - [x] Al llegar al pasar las 5 rondas, se comparan los puntos y se dictamina un ganador.
    - [ ] Al terminar el juego, se ofrece reicinar.
