  document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('load').addEventListener('click', (e) => {
        getData();
    });
  });

  async function getData() {
    const url ="https://www.arbeitnow.com/api/job-board-api"
    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    let data = result.data;
    data.forEach(async (elemt) => {
        let el = document.createElement("div");
        el.innerHTML = elemt.title;
        document.getElementById("content").appendChild(el);
    });
  } catch (error) {
    console.error(error.message);
  }
    
  }