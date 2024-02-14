const fs = require('fs');
const path = require('path');

const dir = "src/environments";
const file = "environement.ts";
const prodFile = "envenvironement-prod.ts"; // For production deployment

const content = `${process.env.ENVFILE}`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    try {
      fs.mkdirSync(dir, { recursive: true });
    }
    catch (error) {
      console.log(`Error while creating ${dir}. Error is ${error}`);
      process.exit(1);
    }
  }
  // Now write to file
  try {
    fs.writeFileSync(dir + "/" + file, content);
    fs.writeFileSync(dir + "/" + prodFile, content);
    if (fs.existsSync(dir + "/" + file)) {
      console.log("File is created", path.resolve(dir + "/" + file));
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
