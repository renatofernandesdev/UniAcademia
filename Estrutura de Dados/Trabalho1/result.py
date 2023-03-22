#Desenvolvido por Renato Fernandes (renatofernandes.dev@gmail.com)
#from stack import stack # Import não utilizado
from Queue import Queue # Import da classe Queue com funções de Deque.

def line(): # Definição da função linha para estilizar a saída dos resultados.
    return '============================================================='

def result(F): # Defição da função result para o funcionamento da lógica do cálculo pósfixado.
    F = Queue(F) # Criação da variável F e instanciação da classe Queue como fila para entrada dos valores da expressão pósfixada.
    S = list() # Criação da variável S como lista/pilha para o funcionamento das operações lógicas abaixo.
    while F: # Condição while para o funcionamento da lógica abaixo enquanto váriável F não está vazia.
        x = F.dequeue() # Desempilhamento do primeiro item da fila, e valor salvo na variável x.
        if x.isdigit() == True: # Condição if verificando se a variável x é um número.
            S.append(x) # Incremento do valor da variável 'x' na pilha 'S' caso 'x' seja um número.
        else: # Caso x não seja um número:
            op2 = S.pop() # Remoção do último elemento da pilha S e valor salvo na varíavel op2.
            op1 = S.pop() # Remoção do último elemento da pilha S e valor salvo na varíavel op1.
            resultado = eval(op1+x+op2) # Resultado da operação op1 + (operando da variável x) + op2.
            S.append(f'{resultado}') # Empilhamento do resultado da operação acima na variável S.
    return resultado # Retorno do resultado após a fila F estar vazia.

if __name__ == '__main__': # Condição __name__ == '__main__' para o funcionamento do "teste" abaixo.
    print(line()) # Chamada da linha estilizada.
    print('   Expressão Pós-Fixada - Estrutura de Dados - UniAcademia', end='\n\n') # Nome do projeto
    print('Expressão infixada: 3 + 5 * 8') # Print da expressão infixada a ser realizada.
    print('Expressão pósfixada: 3 5 8 * +') # Print da expressão pósfixada a ser realizada.
    print('Resultado:', end=' ') 
    print(result(['3','5','8','*','+']), end='\n\n') # Chamada da função result para cálculo da expressão.
    print('Expressão infixada: 3 * 5 + 8') # Print da expressão infixada a ser realizada.
    print('Expressão pósfixada: 3 5 * 8 +') # Print da expressão pósfixada a ser realizada.
    print('Resultado:', end=' ')
    print(result(['3','5','*','8','+'])) # Chamada da função result para cálculo da expressão.
    print(line()) # Chamada da linha estilizada.
