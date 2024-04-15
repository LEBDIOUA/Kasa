class Model {
  static instance = null;

  static getInstance() {
    if (this.instance === null) {
      this.instance = new Model();
    }

    return this.instance;
  }

  get(url) {
    return fetch(url)
      .then((httpBodyResponse) => {
        const response = httpBodyResponse.json();
        return response;
      })
      .catch((error) => {
        console.log("Une erreur s'est produite :");
        console.log(error);
      });
  }

  async getData() {
    const url = "../../data/apparts.json";
    const linkExists = await this.verifierLien(url);

    if (linkExists) {
      this.data = await this.get(url);
    } else {
      this.data = await this.get("/kasa/data/apparts.json");
    }

    return this.data;
  }

  async verifierLien(url) {
    try {
      const response = await fetch(url);
      return response.ok;
    } catch (error) {
      console.error("Erreur lors de la vérification du lien :", error);
      return false;
    }
  }

  async getApparts() {
    const data = await this.getData();
    let err = false;
    const apparts = [];
    try {
      for (let i = 0; i < data.length; i++) {
        apparts.push(data[i]);
      }
    } catch (error) {
      err = true;
    }
    return { apparts, err };
  }

  async getAppartById(id) {
    const data = await this.getData();
    let err = false;
    let appart;
    try {
      appart = data.find((element) => element.id === id);
      if (appart === undefined) {
        err = true;
      }
    } catch (error) {
      err = true;
    }
    return { appart, err };
  }
}
export default new Model();
