const loadBtn = document.querySelector('.load');
const dataList = document.querySelector('.dataList');
const content = document.querySelector('.content');
const span = document.querySelector('.span');

async function geTData() {
  try {
    const send = await axios.post('getData');
    const res = send.data.resp;
    let temp = '';
    for (let i = 0; i < res.length; i++) {
      temp += `<option value='${res[i].id}'>${[i]} - ${res[i].articleTitle}</option>`;
    }
    dataList.innerHTML = temp;
  } catch (error) {
    console.log(error);
  }
}

async function showContent(dataId) {
  const send = await axios.post(dataId);
  content.innerHTML = send.data.resp.articleContent;
  span.innerHTML = send.data.resp.createdAt;
}

dataList.addEventListener('change', (e) => {
  const id = e.target.value;
  showContent(id);
});

loadBtn.onclick = () => {
  geTData();
};

/* document.addEventListener('DOMContentLoaded', () => {
  const datasend = document.querySelector('.list');
  geTData(datasend);
}); */
