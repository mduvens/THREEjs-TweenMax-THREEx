let renderer, camera,scene;
let viewAngle = 45;
let near = 1;
let far = 10000;
let aspect = window.innerWidth / window.innerHeight;

renderer = new THREE.WebGLRenderer();
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(viewAngle, aspect,near,far);

//+++++++LIGHTS
const ambientLight = new THREE.AmbientLight(0xffffff, 1 , 500);

//*************************************************/
const wallTexture = new THREE.TextureLoader().load('wallTexture1.jpg')
const material = new THREE.MeshBasicMaterial({color: 0xc2d2ca, side: THREE.DoubleSide, map: wallTexture})
const geo = new THREE.PlaneGeometry(70,100,10,10)
const chao = new THREE.Mesh(geo,material)
chao.rotation.x += Math.PI/2
const teto = new THREE.Mesh(geo,material)
teto.rotation.x += Math.PI/2
teto.position.y = 30
const geoE = new THREE.PlaneGeometry(30,100,10,10)
paredeEsq = new THREE.Mesh(geoE,material)
paredeEsq.rotation.z += Math.PI/2 
paredeEsq.rotation.y += Math.PI/2 
paredeEsq.position.x = -35
paredeEsq.position.y = 15
paredeDir = new THREE.Mesh(geoE,material)
paredeDir.rotation.z += Math.PI/2 
paredeDir.rotation.y += Math.PI/2 
paredeDir.position.x = 35
paredeDir.position.y = 15
const geoF = new THREE.PlaneGeometry(30,70,10,10)
paredeFr = new THREE.Mesh(geoF, material)
paredeFr.rotation.z += Math.PI/2 
paredeFr.position.z = -50
paredeFr.position.y = 15

var objectLoader = new THREE.ObjectLoader();
  
function init(){
    
    scene.add(camera)
    camera.position.set(-44,26,64)
    renderer.setSize(window.innerWidth,window.innerHeight)
    renderer.setClearColor(0x000F0F)
    document.body.appendChild(renderer.domElement)
    controls = new THREE.OrbitControls(camera, renderer.domElement)
    scene.add(ambientLight)
    /*scene.add(chao)
    scene.add(teto)
    scene.add(paredeEsq)
    scene.add(paredeDir)
    scene.add(paredeFr)*/
    //ajustar ecra
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth,window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix();
    })
    console.log(camera.position)
    controls.update();
    renderer.render(scene,camera)
}
function animate(){
    requestAnimationFrame(animate)
    controls.update();
    renderer.render(scene, camera)
}
init();
animate();