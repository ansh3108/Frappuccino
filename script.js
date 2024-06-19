// controls.js
document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('car');
    let position = { x: 0, y: 0.5, z: 0 };
    const speed = 0.1;
  
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'w':
          position.z -= speed;
          break;
        case 's':
          position.z += speed;
          break;
        case 'a':
          position.x -= speed;
          break;
        case 'd':
          position.x += speed;
          break;
      }
      car.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
    });
  });
  