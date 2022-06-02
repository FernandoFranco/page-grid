function getGrid(n) {
  if (n > 0 && n <= 3) {
    return { rows: 1, columns: n };
  }

  const dividers = [];
  for (let i = (n - 1); i > 1; i -= 1) {
    if (n % i === 0) {
      dividers.push(i);
    }
  }

  if (dividers.length === 0) {
    return { analyze: true };
  }

  const divider = dividers[parseInt(dividers.length / 2)];
  return { rows: n / divider, columns: divider };
}

function getGridTemplate(n) {
  return Array(n).fill('1fr').join(' ');
}

const nItems = prompt("Please enter the quantity of items");
const { rows, columns, analyze } = getGrid(nItems);

if (analyze) {
  alert("Sorry, some numbers I still can't solve at the moment");
} else {
  const container = document.querySelector('.pg-container');
  container.style.gridTemplateRows = getGridTemplate(rows);
  container.style.gridTemplateColumns = getGridTemplate(columns);

  for (let i = 0; i < nItems; i += 1) {
    const item = document.createElement('div');
    item.classList.add('pg-item');
    item.innerText = `Item ${i + 1}`;
    container.appendChild(item);
  }

  alert(`Showing like ${rows}x${columns}`);
}