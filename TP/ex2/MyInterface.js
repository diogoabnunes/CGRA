/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        this.gui.add(this.scene, 'displayTangram').name('Tangram');
        this.gui.add(this.scene, 'displayUnitCube').name('Unit Cube');
        this.gui.add(this.scene, 'displayBaseCube').name('Base Cube');
        this.gui.add(this.scene, 'displayTangramCubeBase').name('Tangram & Base');
        this.gui.add(this.scene, 'displayQuadCube').name('Quad Cube');
        this.gui.add(this.scene, 'displayTangramQuadBase').name('Tangram & Quad Base');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}