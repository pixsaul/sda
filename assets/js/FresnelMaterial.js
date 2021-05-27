const fresnelMaterial = function(
	fresnelColour=0xff4208,
	fresnelAmount1 = 0.27,
	fresnelAmount2 = 0.47,
	fresnelAmount3 = 1.07,
	fresnelAmount4 = 0.19,
){ 
	

	return THREE.extendMaterial(THREE.MeshPhongMaterial, {
		
		
		// Will be prepended to vertex and fragment code
		
		header: 'varying vec3 vNN; varying vec3 vEye;',
		
		
		// Insert code lines by hinting at a existing
		
		vertex: {
			// Inserts the line after #include <fog_vertex>
			'#include <fog_vertex>': `
			
			
			mat4 LM = modelMatrix;
			LM[2][3] = 0.0;
			LM[3][0] = 0.0;
			LM[3][1] = 0.0;
			LM[3][2] = 0.0;
			
			vec4 GN = LM * vec4(objectNormal.xyz, 1.0);
			vNN = normalize(GN.xyz);
			vEye = normalize(GN.xyz - cameraPosition * float(${fresnelAmount4}));`
		},
		fragment: {
			'gl_FragColor = vec4( outgoingLight, diffuseColor.a );' : `
			
			gl_FragColor.rgb +=  float(${fresnelAmount1}) + min(dot(float(${fresnelAmount3}) * vEye, float(${fresnelAmount2}) * normalize(vNN) ), 0.0);
			
			`
		},
		
		material: {
			// color: baseColour,
		},
		// Uniforms (will be applied to existing or added)
		
		uniforms: {
			diffuse: new THREE.Color(fresnelColour),
			//emissive: new THREE.Color(0xff0000),
			//specular: new THREE.Color(0x000000),
			shininess: 0
		}
		
		
	});
}