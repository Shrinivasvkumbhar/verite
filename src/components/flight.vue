<template>
    <div class="landing-page">
      <div ref="canvasWrapper"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.loadModel();
    },
    methods: {
      loadModel() {
        let object;
  
        function onModelLoaded() {
          object.traverse(function (child) {
            let mat = new THREE.MeshPhongMaterial({
              color: 0x171511,
              specular: 0xD0CBC7,
              shininess: 5,
              flatShading: true,
            });
            child.material = mat;
          });
  
          this.setupAnimation(object);
        }
  
        var manager = new THREE.LoadingManager(onModelLoaded.bind(this));
        manager.onProgress = (item, loaded, total) => console.log(item, loaded, total);
  
        var loader = new THREE.OBJLoader(manager);
        loader.load('https://assets.codepen.io/557388/1405+Plane_1.obj', function (obj) {
          object = obj;
        });
      },
      setupAnimation(model) {
        class Scene {
          //...
        }
  
        const scene = new Scene(model);
  
        this.$refs.canvasWrapper.appendChild(scene.renderer.domElement);
  
        gsap.fromTo('canvas', { x: '50%', autoAlpha: 0 }, { duration: 1, x: '0%', autoAlpha: 1 });
        gsap.to('.loading', { autoAlpha: 0 });
        gsap.to('.scroll-cta', { opacity: 1 });
        gsap.set('svg', { autoAlpha: 1 });
  
        // Additional GSAP animations for the flight
  
        // Change the screen to Verite title or perform other actions
        // ...
      },
    },
  };
  </script>
  
  <style>
  .landing-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  