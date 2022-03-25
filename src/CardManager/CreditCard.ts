export interface CreditCard {
  id: string;
  cardNumber: string;
  cardHolder: string;
  cardMonth: string;
  cardYear: string;
  cardCvv: string;
}
export interface AddEditCard extends CreditCard {
  isCardFlipped: boolean;
}

//Data Layer
export class CreditCardAPI {
  async fetchCreditCardList(): Promise<CreditCard[]> {
    const apiData: CreditCard[] = [
      {
        id: 'ff646567-484e-4eb7-961f-977f7c728eb9',
        cardNumber: '1111111111111111',
        cardHolder: 'Hassan Saeed',
        cardMonth: '01',
        cardYear: '2023',
        cardCvv: '1111',
      },
      {
        id: 'b8262cc8-6506-46f2-925a-819729b224ec',
        cardNumber: '2222222222222222',
        cardHolder: 'John Doe',
        cardMonth: '02',
        cardYear: '2024',
        cardCvv: '2222',
      },
    ];
    let creditCardsList: CreditCard[] = [];
    //first check local storage if local storage is empty then add api mock data as seed
    if (localStorage.getItem('cards')) {
      const localStorageData: CreditCard[] = JSON.parse(
        localStorage.getItem('cards') ?? '',
      );
      creditCardsList = [...localStorageData];
    } else {
      creditCardsList = [...apiData];
      updateLocalStorageCards(creditCardsList);
    }

    return creditCardsList;
    //TODO:integrate API module when got API from backend team :)
    /*
    private readonly api = new Api();//it will have all Restful verbs functions
    return axios.get(`ENDPOINT_GOES_HERE`)
    .then((res: { data: any; }) => {
      return res.data;
    });
    */
  }
} //CreditCardAPI Class End

//Business Layer
export async function fetchCreditCardList(): Promise<CreditCard[]> {
  const api = new CreditCardAPI();
  return api.fetchCreditCardList();
}
export function updateLocalStorageCards(cards: CreditCard[]) {
  localStorage.setItem('cards', JSON.stringify(cards));
}
