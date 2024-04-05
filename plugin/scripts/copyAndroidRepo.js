/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

console.log(__dirname);

fs.writeFileSync('/Users/mikesummerfeldt/Movies/test.json', JSON.stringify({ test: __dirname }), null);

/* const filePath = './android/app/capacitor.build.gradle';
const searchString = 'project.afterEvaluate {';
const multiLineString = `
project.afterEvaluate {
  repositories {
      maven {
          url 'https://pkgs.dev.azure.com/OutSystemsRD/9e79bc5b-69b2-4476-9ca5-d67594972a52/_packaging/PublicArtifactRepository/maven/v1'
          name 'Azure'
          credentials {
              username = "optional"
              password = ""
          }
          content {
              includeGroup "com.github.outsystems"
          }
      }
  }
}
`;

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  if (!data.includes(searchString)) {
    fs.appendFile(filePath, multiLineString, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Multi-line string added to the file.');
    });
  } else {
    console.log('The file already contains the search string.');
  }
}); */
