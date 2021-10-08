if ($(window).width() >= 992) {
    var elem1 = document.getElementById('number1');
    
    var elem2 = document.getElementById('number2');
    
    var elem3 = document.getElementById('number3')


    var text1 = new Blotter.Text(elem1.getAttribute("data-number"), {
        family : "'futura-futuris', sans-serif",
        size : 200,
        fill : "#6fbcbc",
        leading : 1,
        weight: "bold"
    });
    
    var text2 = new Blotter.Text(elem2.getAttribute("data-number"), {
        family : "'futura-futuris', sans-serif",
        size : 200,
        fill : "#6fbcbc",
        leading : 1,
        weight: "bold"
    });
    
    var text3 = new Blotter.Text(elem3.getAttribute("data-number"), {
        family : "'futura-futuris', sans-serif",
        size : 200,
        fill : "#6fbcbc",
        leading : 1,
        weight: "bold"
    });
    
    var material = new Blotter.FliesMaterial();
    material.uniforms.uPointCellWidth.value = 0.025;
    
    var blotter1 = new Blotter(material, { 
        texts : text1 
    });
    
    var blotter2 = new Blotter(material, { 
        texts : text2 
    });
    
    var blotter3 = new Blotter(material, { 
        texts : text3 
    });
    
    var scope1 = blotter1.forText(text1);
    
    var scope2 = blotter2.forText(text2);
    
    var scope3 = blotter3.forText(text3);
    
    scope1.appendTo(elem1);
    scope2.appendTo(elem2);
    scope3.appendTo(elem3);
    
}
