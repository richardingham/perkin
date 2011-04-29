perkin.Bond = function (atomFrom, atomTo, properties) {
    this.atomFrom   = atomFrom   || null;
    this.atomTo     = atomTo     || null;
    this.properties = properties || [];
};

perkin.Bond.create = function (spec) {
    var B = new perkin.Molecule(
        (spec && spec.atomFrom),
        (spec && spec.atomFrom),
        (spec && spec.properties)
    );
    
    return B;
};

// TODO: atoms can be arrays of atoms, for Markush?
perkin.Bond.prototype = {
    setAtomFrom: function (atom) {
        if (!(atom instanceof perkin.Atom))
            throw "atomFrom must be a perkin.Atom";
            
        this.atomFrom = atom;
    },
    
    setAtomTo: function (atom) {
        if (!(atom instanceof perkin.Atom))
            throw "atomTo must be a perkin.Atom";
            
        this.atomTo = atom;
    }

};
