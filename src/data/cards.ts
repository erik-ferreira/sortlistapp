export const CARDS = [
  { id: 1, title: "Entretenimento" },
  { id: 2, title: "Arte e Cultura" },
  { id: 3, title: "Negôcios e finanças" },
  { id: 4, title: "Alimantação" },
  { id: 5, title: "Viagens" },
  { id: 6, title: "Jogos" },
  { id: 7, title: "Música" },
  { id: 8, title: "Carreira" },
  { id: 9, title: "Tecnologia" },
  { id: 10, title: "Ciência" },
  { id: 11, title: "Esportes" },
  { id: 12, title: "Moda e Beleza" },
]

export const totalCards = CARDS.length

// function to create one array object by CARDS
export function listToObject() {
  const object: any = {}

  CARDS.forEach((card, index) => {
    object[card.id] = index
  })

  return object
}
