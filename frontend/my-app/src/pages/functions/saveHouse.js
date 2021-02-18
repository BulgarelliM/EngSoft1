import config from "../base/config.json";

export default async function saveHouse(type,
  suites,
  sala_de_estar,
  quartos,
  vagas_garagem,
  area,
  armario_embutido,
  descricao,
  aluguel,
  city,
  neighborhood,
  endereco,
  Andar,
  portaria_24h,
  sala_de_jantar,
  Condominio
  ) {
  if (type == "casa") {
    let url = config.baseURL + "/casas";
    let body = {
    };
    let isLogin = false;
    let myRequest = new Request(url, { method: "POST", body: body });

    await fetch(myRequest)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return "error";
        }
      })
      .then((response) => {
      })
      .catch((error) => {
      });

    return isLogin;
  } else {
  }
}
