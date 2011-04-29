perkin.Molecule = function () {};

perkin.Molecule.create = function (spec) {
    var M = new perkin.Molecule();
    
    M.setAtoms (spec && spec.atoms);
    M.setBonds (spec && spec.bonds);
    
    return M;
};

perkin.Molecule.prototype = {
    setAtoms: function (spec) {
        var atoms = [];
        
        (spec || []).forEach(function(atom, i) {
            atoms[i] = Atom.create(atom);
        });
    
        this.atoms = atoms;
    },
    
    setBonds: function (spec) {
        if (!this.atoms) return;
        
        var bonds = [];
        
        (spec || []).forEach(function(bond, i) {
            var B = Bond.create(bond);
            this.atoms[B.bondFrom].bondTo(this.atoms[B.bondTo], B);
            bonds[i] = B;
        });
        
        this.bonds = bonds;
    }

};
