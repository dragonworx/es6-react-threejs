import THREE from 'three';

// This is a global shim, otherwise the THREE object is always scoped to the module importing it.
// The code inside THREE expects a global named 'THREE'.
// Therefore when we want THREE functionality we treat it like a global and just include this to ensure it (ie. don't import 'three' directly in other modules)

window['THREE'] = THREE;
