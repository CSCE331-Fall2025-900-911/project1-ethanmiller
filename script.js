
document.addEventListener("DOMContentLoaded", () => {
    const menuTab = document.querySelector('.menu-tab');
    const tabHandle = document.querySelector('.tab-handle')
    const menuLabel = document.querySelector('.menu-label');
    const bodies = document.querySelectorAll('.tch-body');
    const lb1 = document.querySelectorAll('.lb1inner');
    const lb2 = document.querySelectorAll('.lb2inner');
    const lb3 = document.querySelectorAll('.lb3inner');
    const upbtn = document.getElementById('upbtn');
    const dwnbtn = document.getElementById('dwnbtn');
    
    
    let current = 0;
    let isActive = false;

    tabHandle.addEventListener("click", () => {
        menuTab.classList.toggle("expanded");
        tabHandle.classList.toggle("expanded");

        if(tabHandle.classList.contains('expanded')) {
            menuLabel.textContent = "menu.";
        }
        else {
            menuLabel.textContent ="menu?";
        }
    });




if(upbtn) {
    document.getElementById('upbtn').addEventListener('click', () => {
        if (isActive) return;
        isActive = true;

        let old = current;
        current = (current + 1) % bodies.length;
        
        bodies[old].classList.remove('active');
        bodies[old].classList.add('exit');
        if(lb1.length !== 0) {
            lb1[old].classList.remove('active');
            lb1[old].classList.add('exit');
            lb2[old].classList.remove('active');
            lb2[old].classList.add('exit');
            lb3[old].classList.remove('active');
            lb3[old].classList.add('exit');
        }

        setTimeout(() =>{
            void bodies[current].offsetWidth;
            bodies[current].classList.add('active');
            if(lb1.length !== 0) {
                void lb1[current].offsetWidth;
                lb1[current].classList.add('active');
                void lb2[current].offsetWidth;
                lb2[current].classList.add('active');
                void lb3[current].offsetWidth;
                lb3[current].classList.add('active');
            }
        }, 450);

        bodies[old].addEventListener('transitionend', function handler() {
            bodies[old].classList.remove('exit');
            if(lb1.length !== 0) {
                lb1[old].classList.remove('exit');
                lb2[old].classList.remove('exit');
                lb3[old].classList.remove('exit');
            }
            bodies[old].removeEventListener('transitionend', handler);
            isActive = false;
        });
    });
}

if(dwnbtn) {
    document.getElementById('dwnbtn').addEventListener('click', () => {
        if (isActive) return;
        isActive = true;

        let old = current;
        if(current == 0) {
            current = bodies.length - 1;
        }
        else {
            current = current - 1;
        }
        
        bodies[old].classList.remove('active');
        bodies[old].classList.add('exit');

        setTimeout(() =>{
            void bodies[current].offsetWidth;
            bodies[current].classList.add('active');
        }, 450);

        bodies[old].addEventListener('transitionend', function handler() {
            bodies[old].classList.remove('exit');
            bodies[old].removeEventListener('transitionend', handler);
            isActive = false;
        });
    });
}
});

