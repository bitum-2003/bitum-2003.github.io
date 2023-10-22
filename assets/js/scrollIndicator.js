window.onload = () => {

    const progress = () => { 
        const line = document.createElement('div')
        line.className = 'progress';
        line.style.cssText = `
                            height: 6px;
                            background: linear-gradient(to right, #7b4397, #dc2430);
                            position: fixed;
                            top: 0;
                            left: 0;
                            transition: 1s;
                            z-index: 99999;
                        `;
        document.body.prepend(line); 

        const progressWidth = () => { 
            return line.style.width = Math.floor(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%';
        }

        progressWidth();

        document.addEventListener('scroll', throttle(progressWidth, 64)); 
        window.addEventListener('resize', throttle(progressWidth, 64));

    }

    progress(); 
}

const throttle = (func, ms) => { 
    let locked = false; 
    return () => { 
        if (locked) return; 
        locked = true; 
        setTimeout(() => { 
            func(); 
            locked = false; 
        }, ms); 
    }
}
