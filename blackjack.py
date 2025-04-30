import random

# Função para criar um baralho
def criar_baralho():
    naipes = ['♥', '♦', '♣', '♠']  # Usando símbolos para os naipes
    valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei', 'Ás']
    baralho = [(valor, naipe) for valor in valores for naipe in naipes]
    random.shuffle(baralho)
    return baralho

# Função para calcular o valor da mão
def calcular_valor_mao(mao):
    valor = 0
    ases = 0
    for carta in mao:
        if carta[0] in ['Valete', 'Dama', 'Rei']:
            valor += 10
        elif carta[0] == 'Ás':
            ases += 1
            valor += 11  # Contar Ás como 11 inicialmente
        else:
            valor += int(carta[0])
    
    # Ajustar valor se houver ases
    while valor > 21 and ases:
        valor -= 10
        ases -= 1
    
    return valor

# Função para exibir a mão de forma bonita
def exibir_mao(mao, jogador=True):
    tipo = "Suas cartas" if jogador else "Cartas do dealer"
    cartas = ' '.join([f"{valor}{naipe}" for valor, naipe in mao])
    print(f"{tipo}: {cartas} (Soma: {calcular_valor_mao(mao)})")

# Função principal do jogo
def jogar_blackjack():
    baralho = criar_baralho()
    mao_jogador = [baralho.pop(), baralho.pop()]
    mao_dealer = [baralho.pop(), baralho.pop()]

    exibir_mao(mao_jogador)
    print(f"Dealer mostra: {mao_dealer[0][0]}{mao_dealer[0][1]}")

    while True:
        acao = input("\nDeseja 'pedir' outra carta ou 'parar'? ").strip().lower()
        if acao == 'pedir':
            mao_jogador.append(baralho.pop())
            exibir_mao(mao_jogador)
            if calcular_valor_mao(mao_jogador) > 21:
                print("Você estourou! Dealer vence.")
                return
        elif acao == 'parar':
            break
        else:
            print("Ação inválida. Tente novamente.")

    # Turno do dealer
    while calcular_valor_mao(mao_dealer) < 17:
        mao_dealer.append(baralho.pop())

    exibir_mao(mao_dealer, jogador=False)

    valor_jogador = calcular_valor_mao(mao_jogador)
    valor_dealer = calcular_valor_mao(mao_dealer)

    print("\nResultado:")
    print(f"Valor das suas cartas: {valor_jogador}")
    print(f"Valor das cartas do dealer: {valor_dealer}")

    if valor_dealer > 21 or valor_jogador > valor_dealer:
        print("Você venceu!")
    elif valor_jogador < valor_dealer:
        print("Dealer vence!")
    else:
        print("Empate!")

# Iniciar o jogo
if __name__ == "__main__":
    print("Bem-vindo ao Blackjack!\n")
    jogar_blackjack()