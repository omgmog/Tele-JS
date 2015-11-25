(function (win) {
  'use strict';

  var T = win.THREE;

  var width = win.innerWidth;
  var height = win.innerHeight;
  var fov = 90;
  var aspect = width / height;

  // Renderer
  var scene = new T.Scene();
  var renderer = new T.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  // Camera
  var camera = new T.PerspectiveCamera(fov, aspect, 0.1, 1000);
  scene.add(camera);
  camera.lookAt(new T.Vector3(0,0,0));
  camera.position.z = 20;

  var cubeGeometry = new T.CubeGeometry(10, 10, 10);
  var cubeTexture = new T.ImageUtils.loadTexture('img/texture.png');
  var cubeMaterial = new T.MeshLambertMaterial({
    color: 0xff0000,
    map: cubeTexture
  });
  var cube = new T.Mesh(cubeGeometry, cubeMaterial);
  scene.add(cube);

  var ambientLight = new T.AmbientLight('#fff');
  scene.add(ambientLight);


  var animate = function () {
    cube.rotation.x += 0.04;
    cube.rotation.z += 0.04;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
}(window));