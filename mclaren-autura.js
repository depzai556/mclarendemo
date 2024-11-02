const stats = document.querySelector('.stats');
const counters = document.querySelectorAll(".counter");
let bol = false;


const sectionOffset = stats.offsetTop + stats.offsetHeight;


window.addEventListener("scroll", () => {
    const pageOffset = window.innerHeight + pageYOffset;
    

    if (pageOffset > sectionOffset && bol === false) {
        counters.forEach((counter) => {
            function updateCount() {
                const target = +counter.getAttribute('data-target');
                const speed = +counter.getAttribute('data-speed');
                const count = +counter.innerText;

                if (count < target) {
                    counter.innerText = count + 1;
                    setTimeout(updateCount, speed);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
            bol = true;
        });
    }
});
function submitEmail() {
    const emailInput = document.getElementById('emailInput').value;
    const message = document.getElementById('message');

    if (emailInput) {
        // Xử lý gửi email ở đây (ví dụ: gửi đến server)
        message.textContent = `Email "${emailInput}" đã được gửi thành công!`;
    } else {
        message.textContent = "Vui lòng nhập email!";
        message.style.color = "red";
    }
}




