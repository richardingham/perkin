perkin.Atom = function () {};

perkin.Atom.create = function (properties) {
    var A = new perkin.Atom();
    
    if (properties) {
        A.setPosition (properties.x, properties.y, properties.z);
        A.setElement  (properties.element);
        //A.setIsotope  (properties.isotope);
        A.setCharge   (properties.charge);
        A.setRadical  (properties.radical);
    }
    
    return A;
};

perkin.Atom.prototype = {
    setPosition: function (specX, specY, specZ) {
        this.x = specX;
        this.y = specY;
        this.z = specZ;
    },
    
    setElement: function (spec) {
        this.element = Elements.get(spec);
    },
    
    setCharge: function (spec) {
        this.charge = parseInt(spec, 10);
    },
    
    setRadical: function (spec) {
        this.radical = max(0, min(2, parseInt(spec, 10)));
    },
    
    bondTo: function (atom, bond) {
        if (!this.bonds) this.bonds = [];
        
        if (!bond)
            bond = perkin.Bond.create({
                atomFrom: this,
                atomTo: atom
            });
    
        if (!this.isBondedTo(atom))
            this.bonds.push({atom: atom, bond: bond});
    },
    
    isBondedTo: function (atom) {
        return this.bonds && this.bonds.some(function (a) { return a.atom == atom; });
    }
    
};
