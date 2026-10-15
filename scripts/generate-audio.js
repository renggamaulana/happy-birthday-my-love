const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const audioDir = path.join(__dirname, '..', 'public', 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

console.log('Generating soothing audio samples via ffmpeg...');

// Generate gentle 16-second ambient music box background loop
// C major / A minor soothing bell chord arpeggios
const bgPath = path.join(audioDir, 'background.mp3');
const bgFilter = [
  'sine=frequency=261.63:duration=16[c4]',
  'sine=frequency=329.63:duration=16[e4]',
  'sine=frequency=392.00:duration=16[g4]',
  'sine=frequency=523.25:duration=16[c5]',
  '[c4]volume=0.15[vc4]',
  '[e4]volume=0.12[ve4]',
  '[g4]volume=0.10[vg4]',
  '[c5]volume=0.08[vc5]',
  '[vc4][ve4][vg4][vc5]amix=inputs=4:duration=first:dropout_transition=2[mix]',
  '[mix]afade=t=in:ss=0:d=1,afade=t=out:st=14:d=2[out]'
].join(';');

try {
  execSync(`ffmpeg -y -f lavfi -i "${bgFilter}" -map "[out]" -c:a libmp3lame -b:a 128k "${bgPath}"`, { stdio: 'inherit' });
  console.log('✓ Created background.mp3');
} catch (e) {
  console.error('Error generating background.mp3:', e.message);
}

// Generate gentle 6-second voice-note sample (soft chime)
const voicePath = path.join(audioDir, 'birthday-voice.mp3');
const voiceFilter = [
  'sine=frequency=440:duration=6[a4]',
  'sine=frequency=554.37:duration=6[cs5]',
  'sine=frequency=659.25:duration=6[e5]',
  '[a4]volume=0.18[va4]',
  '[cs5]volume=0.15[vcs5]',
  '[e5]volume=0.12[ve5]',
  '[va4][vcs5][ve5]amix=inputs=3:duration=first[vmix]',
  '[vmix]afade=t=in:ss=0:d=0.5,afade=t=out:st=4.5:d=1.5[out]'
].join(';');

try {
  execSync(`ffmpeg -y -f lavfi -i "${voiceFilter}" -map "[out]" -c:a libmp3lame -b:a 128k "${voicePath}"`, { stdio: 'inherit' });
  console.log('✓ Created birthday-voice.mp3');
} catch (e) {
  console.error('Error generating birthday-voice.mp3:', e.message);
}
