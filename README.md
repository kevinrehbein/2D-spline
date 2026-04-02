# 2D Spline Visualizer - Catmull-Rom

Este projeto é uma ferramenta interativa desenvolvida em ambiente web para a exploração e visualização de curvas paramétricas, especificamente a **Catmull-Rom Spline**.

A aplicação permite que utilizadores criem trajetórias suaves através de pontos de controlo definidos manualmente num canvas.

---

## Funcionalidades

- **Interação Direta:**  
  Adicione pontos de controlo clicando em qualquer lugar da área do canvas.

- **Geração de Curva:**  
  Processamento matemático que converte pontos isolados numa spline contínua e suave.

- **Interface Intuitiva:**
  - Indicador visual da quantidade de pontos adicionados
  - Botão para limpar o progresso e reiniciar o desenho
  - Feedback visual sobre requisitos mínimos (mínimo de 2 pontos)

- **Design Moderno:**  
  Interface responsiva com tipografia clara e elementos visuais organizados

---

## Tecnologias Utilizadas

- **HTML5:**  
  Estrutura da página e uso do elemento `<canvas>` para renderização gráfica

- **CSS3:**  
  Estilização personalizada, layouts flexíveis e componentes de interface

- **JavaScript (ES6+):**  
  Manipulação de eventos, cálculo da spline e renderização dinâmica no canvas

---

## 📁 Estrutura de Ficheiros

```
├── index.html # Estrutura principal e canvas
├── main.js # Lógica e algoritmos da curva
└── style.css # Estilos e layout
```

---

## Como Utilizar

1. Abra o ficheiro `index.html` em qualquer navegador moderno
2. Clique na área cinzenta (Board) para adicionar pontos de controlo
3. Observe o contador de pontos no painel de controlos
4. Clique em **"Gerar Curva"** para visualizar a spline
5. Utilize o botão **"Limpar"** para reiniciar o desenho

---

## Conceitos Aplicados

As **Catmull-Rom Splines** são amplamente utilizadas em computação gráfica para interpolação, pois a curva gerada passa exatamente por todos os pontos de controlo (com exceção das extremidades, dependendo da implementação).

Isso garante uma continuidade suave de primeira ordem (_C¹_), sendo ideal para:

- Animações
- Trajetórias de movimento
- Modelagem de curvas suaves

---

## Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- Computação gráfica
- Visualização matemática
- Interfaces interativas no ambiente web

---

## 📄 Licença

Este projeto é livre para uso acadêmico e educacional.
