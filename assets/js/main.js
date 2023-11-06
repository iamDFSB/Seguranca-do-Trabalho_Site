const block_main = document.querySelector('body > section');

for (let index = 1; index <= 12; index++) {
    block_main.innerHTML += `<div class="container">
                                <div class="content">
                                    ${index}
                                </div>
                            </div>`;
}