#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float timeFactor;

void main() {

	vec4 color = texture2D(uSampler, vTextureCoord+vec2(0.0,timeFactor*0.02));
	gl_FragColor = color;
}