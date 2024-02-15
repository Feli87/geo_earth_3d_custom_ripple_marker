import './style.css'
import * as THREE from 'three';
window.THREE = THREE;
import ThreeGlobe from 'three-globe'
// import { TrackballControls } from 'three/addons/controls/TrackballControls.js';


const myImageUrl = './earth_dark.jpg'
const myData = './custom.geo.json'

//     // Gen random data
//     const N = 4; // Número de trayectorias que deseas generar

// const arcsData = [];

// // Generar trayectorias de Argentina a Brasil
// for (let i = 0; i < N; i++) {
//     arcsData.push({
//         startLat: (-55 + Math.random() * 45),  // Argentina: Latitud entre -55 y -10
//         startLng: (-75 + Math.random() * 40),  // Argentina: Longitud entre -75 y -35
//         endLat: (-33 + Math.random() * 30),    // Brasil: Latitud entre -33 y 5
//         endLng: (-75 + Math.random() * 45),    // Brasil: Longitud entre -75 y -30
//         color: ['#87bc15', '#87bc15', '#87bc15', '#87bc15', '#87bc15'][Math.round(Math.random() * 3)]
//     });
// }

// // Generar trayectorias de Estados Unidos a Europa
// for (let i = 0; i < N; i++) {
//     arcsData.push({
//         startLat: (30 + Math.random() * 50),   // Estados Unidos: Latitud entre 30 y 80
//         startLng: (-125 + Math.random() * 60), // Estados Unidos: Longitud entre -125 y -65
//         endLat: (35 + Math.random() * 60),     // Europa: Latitud entre 35 y 65
//         endLng: (-10 + Math.random() * 80),    // Europa: Longitud entre -10 y 70
//         color: ['red', 'red', 'red', 'red'][Math.round(Math.random() * 3)]
//     });
// }

// // Generar trayectorias de China a Rusia
// for (let i = 0; i < N; i++) {
//     arcsData.push({
//         startLat: (25 + Math.random() * 40),   // China: Latitud entre 25 y 65
//         startLng: (75 + Math.random() * 40),   // China: Longitud entre 75 y 115
//         endLat: (50 + Math.random() * 50),     // Rusia: Latitud entre 50 y 100
//         endLng: (40 + Math.random() * 130),    // Rusia: Longitud entre 40 y 170
//         color: ['#87bc15', '#87bc15', '#87bc15', '#87bc15', '#87bc15'][Math.round(Math.random() * 3)]
//     });
// }


//     const Globe = new ThreeGlobe()
//       .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
//       .arcsData(arcsData)
//       .arcColor('color')
//       .arcAltitudeAutoScale(1) // pointAltitude
//       // .pointRadius(0.25)
//       .arcDashLength(0.4)
//       .arcStroke(.4)
//       .pointResolution(12)
//       .arcDashGap(4)
//       .arcDashInitialGap(() => Math.random() * 5)
//       .arcDashAnimateTime(1500);

//     // Setup renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.querySelector('#app').appendChild(renderer.domElement);

//     // Setup scene
//     const scene = new THREE.Scene();
//     scene.add(Globe);
//     scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
//     scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));

//     // Setup camera
//     const camera = new THREE.PerspectiveCamera();
//     camera.aspect = window.innerWidth/window.innerHeight;
//     camera.updateProjectionMatrix();
//     camera.position.z = 500;

//     // Add camera controls
//     const tbControls = new TrackballControls(camera, renderer.domElement);
//     tbControls.minDistance = 101;
//     tbControls.rotateSpeed = 10;
//     tbControls.zoomSpeed = 0.8;

//     // Kick-off renderer
//     (function animate() { // IIFE
//       // Frame cycle
//       tbControls.update();
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     })();
  // // Gen random data
  // const N = 300;
  // const gData = [...Array(N).keys()].map(() => ({
  //   lat: (Math.random() - 0.5) * 180,
  //   lng: (Math.random() - 0.5) * 360,
  //   size: Math.random() / 3,
  //   color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  // }));

  // const Globe = new ThreeGlobe()
  //   .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
  //   .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  //   .pointsData(gData)
  //   .pointAltitude('size')
  //   .pointColor('color');

  // setTimeout(() => {
  //   gData.forEach(d => d.size = Math.random());
  //   Globe.pointsData(gData);
  // }, 4000);

  // // Setup renderer
  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // document.querySelector('#app').appendChild(renderer.domElement);

  // // Setup scene
  // const scene = new THREE.Scene();
  // scene.add(Globe);
  // scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
  // scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));

  // // Setup camera
  // const camera = new THREE.PerspectiveCamera();
  // camera.aspect = window.innerWidth/window.innerHeight;
  // camera.updateProjectionMatrix();
  // camera.position.z = 500;

  // // Add camera controls
  // const tbControls = new TrackballControls(camera, renderer.domElement);
  // tbControls.minDistance = 101;
  // tbControls.rotateSpeed = 50;
  // tbControls.zoomSpeed = 0.8;

  // // Kick-off renderer
  // (function animate() { // IIFE
  //   // Frame cycle
  //   tbControls.update();
  //   renderer.render(scene, camera);
  //   requestAnimationFrame(animate);
  // })();
  import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
  import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';

  // const markerSvg = `<svg viewBox="-4 0 36 36">
  //   <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
  //   <circle fill="black" cx="14" cy="14" r="7"></circle>
  // </svg>`;

  // // Gen random data
  // const N = 10;
  // const gData = [...Array(N).keys()].map(() => ({
  //   lat: (Math.random() - 0.5) * 180,
  //   lng: (Math.random() - 0.5) * 360,
  //   size: 7 + Math.random() * 30,
  //   color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  // }));

  // gData.push({
  //   lat: -36.8927,
  //   lng: -60.3225,
  //   size: 7 + Math.random() * 30,
  //   color: 'violet'
  // })

  // const Globe = new ThreeGlobe()
  //   .globeImageUrl('./earth_dark.jpg')
  //   .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  //   .htmlElementsData(gData)
  //   .htmlElement(d => {
  //     const el = document.createElement('div');
  //     el.innerHTML = markerSvg;
  //     el.style.color = d.color;
  //     el.style.width = `${d.size}px`;
  //     return el;
  //   });

  // // Setup renderers
  // const renderers = [new THREE.WebGLRenderer(), new CSS2DRenderer()];
  // renderers.forEach((r, idx) => {
  //   r.setSize(window.innerWidth, window.innerHeight);
  //   if (idx > 0) {
  //     // overlay additional on top of main renderer
  //     r.domElement.style.position = 'absolute';
  //     r.domElement.style.top = '0px';
  //     r.domElement.style.pointerEvents = 'none';
  //   }
  //   document.querySelector('#app').appendChild(r.domElement);
  // });

  // // Setup scene
  // const scene = new THREE.Scene();
  // scene.add(Globe);
  // scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
  // scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));

  // // Setup camera
  // const camera = new THREE.PerspectiveCamera();
  // camera.aspect = window.innerWidth/window.innerHeight;
  // camera.updateProjectionMatrix();
  // camera.position.z = 500;

  // // Add camera controls
  // const tbControls = new TrackballControls(camera, renderers[0].domElement);
  // tbControls.minDistance = 101;
  // tbControls.rotateSpeed = 20;
  // tbControls.zoomSpeed = 0.8;

  // // Update pov when camera moves
  // Globe.setPointOfView(camera.position, Globe.position);
  // tbControls.addEventListener('change', () => Globe.setPointOfView(camera.position, Globe.position));

  // // Kick-off renderers
  // (function animate() { // IIFE
  //   // Frame cycle
  //   tbControls.update();
  //   renderers.forEach(r => r.render(scene, camera));
  //   requestAnimationFrame(animate);
  // })();

    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;
      // Gen random data
      const N = 1;
      const gData = [...Array(N).keys()].map(() => ({
        lat: -36.8927,
        lng: -60.3225,
        maxR: 0.2 * 20 + 3,
        propagationSpeed: 0.1 * 10 + 1,
        repeatPeriod: 0.8 * 2000 + 200,
        color:'red',
        size: 27
      }));
      const gDataElement = [...Array(N).keys()].map(() => ({
        lat: -36.8927,
        lng: -60.3225,
        color:'orange',
        size: 27
      }));
  
      const colorInterpolator = t => `rgba(255,100,50,${1-t})`;
  
      const Globe = new ThreeGlobe()
        .globeImageUrl('./earth_ligth.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .ringsData(gData)
        .ringColor(() => colorInterpolator)
        .ringMaxRadius('maxR')
        .atmosphereColor('#284ca0')
        .onGlobeReady(globe => {
          console.log('Demo Traina Felipe Portfolio https://www.linkedin.com/in/felipe-traina-ar/ ')
        })
        .ringAltitude(0)
        .ringPropagationSpeed('propagationSpeed')
        .ringRepeatPeriod('repeatPeriod')
        .htmlElementsData(gDataElement)
        .htmlElement(d => {
          const el = document.createElement('div');
          el.innerHTML = markerSvg;
          el.style.color = d.color;
          el.style.width = `${d.size}px`;
          return el;
        })

          const renderers = [new THREE.WebGLRenderer(), new CSS2DRenderer()];
          renderers.forEach((r, idx) => {
            r.setSize(window.innerWidth, window.innerHeight);
            if (idx > 0) {
              // overlay additional on top of main renderer
              r.domElement.style.position = 'absolute';
              r.domElement.style.top = '0px';
              r.domElement.style.pointerEvents = 'none';
            }
            document.querySelector('#app').appendChild(r.domElement);
          });

  
      // Setup renderer
      // const renderer = new THREE.WebGLRenderer();
      // renderer.setSize(window.innerWidth, window.innerHeight);
      // document.querySelector('#app').appendChild(renderer[0].domElement);
  
      // Setup scene
      const scene = new THREE.Scene();
      scene.add(Globe);
      scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
      scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));
      var ambientLight = new THREE.AmbientLight(0xfffffb, 0.3);
      scene.add(ambientLight);
      scene.background = new THREE.Color(0xFFFFFF);
      // Setup camera
      const camera = new THREE.PerspectiveCamera();
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      camera.position.z = 500;
  
      // Add camera controls
      const tbControls = new TrackballControls(camera, renderers[0].domElement);
      tbControls.minDistance = 101;
      tbControls.rotateSpeed = 12;
      tbControls.zoomSpeed = 0.4;
      tbControls.panSpeed = 0.2;
  
      // Kick-off renderer
      (function animate() { // IIFE
        // Frame cycle
        tbControls.update();
        renderers.forEach(r => r.render(scene, camera));
        requestAnimationFrame(animate);
      })();