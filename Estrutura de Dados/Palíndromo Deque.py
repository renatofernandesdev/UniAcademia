#Desenvolvido por Renato Fernandes (renatofernande.dev@gmail.com)
from collections import deque # Importa classe deque(fila) de collections.

def line(): # Definição da função linha para estilizar saída.
    return "========================================================="

def ifPal(pal): # Definição da função ifPal recebendo a entrada de uma palavra para checagem de palíndromo utilizando a lógica abaixo.
    pal = deque(pal) # Instanciação da classe importada deque para criação de fila recebendo a entrada na variável pal.
    while len(pal) >= 1: # Condição de repetição para funcionamento da comparação na lógica abaixo.
        front = pal[0] # Setagem da variável front recebendo o primeiro item da fila.
        rear = pal[-1] # Setagem da variável rear recebendo o último item da fila.

        if front == rear: # Comparação se a cabeça da fila é igual à cauda.
            front = pal.popleft() # Remoção do primeiro item da fila pal.
            rear = pal.pop() # Remoção do último item da fila pal.
        else: # Caso a cabeça e a cauda não forem iguais:
            return "Não é um palíndromo"
        return "É um palíndromo" # Ao final das comparações e remoções, quando sobrar somente uma letra, significa que esta palavra é um palíndromo

if __name__ == '__main__': # Condição __name__ == '__main__' para o funcionamento do "teste" abaixo.
    print(line(), end="\n") # Chamada da função com a linha estilizada.
    print("                 Verificador de Palíndromos") # Nome do programa.
    pal = str(input("Insira uma palavra: ")).upper().strip() # Input da palavra com métodos para deixar as letras em maiúsculo e remoção de espaços antes e depois da palavra.
    for i in pal: # Loop for para inserção de letra por letra dentro da fila para o funcionamento da função ifPal.
        pal += i
    print()
    print(ifPal(pal)) # Chamada da função com o valor inserido no input na variável pal
    print(line()) # Chamada da função com a linha estilizada.
