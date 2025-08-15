const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true, verbose: true });

// Schema dosyalarının bulunduğu dizin
const schemasDir = path.join(__dirname, '../schemas');

// Test fonksiyonu
function validateSchemas() {
  console.log('🔍 JSON Schema doğrulama başlıyor...\n');
  
  let allValid = true;
  const schemaFiles = fs.readdirSync(schemasDir).filter(file => file.endsWith('.schema.json'));
  
  schemaFiles.forEach(file => {
    const filePath = path.join(schemasDir, file);
    console.log(`📄 ${file} doğrulanıyor...`);
    
    try {
      const schemaContent = fs.readFileSync(filePath, 'utf8');
      const schema = JSON.parse(schemaContent);
      
      // JSON Schema'nın kendisinin geçerli olup olmadığını kontrol et
      const isValid = ajv.validateSchema(schema);
      
      if (isValid) {
        console.log(`✅ ${file} - Geçerli`);
      } else {
        console.log(`❌ ${file} - Geçersiz:`);
        if (ajv.errors) {
          ajv.errors.forEach(error => {
            console.log(`   - ${error.instancePath}: ${error.message}`);
          });
        }
        allValid = false;
      }
    } catch (error) {
      console.log(`❌ ${file} - Parse hatası: ${error.message}`);
      allValid = false;
    }
    
    console.log('');
  });
  
  if (allValid) {
    console.log('🎉 Tüm schema dosyaları geçerli!');
    process.exit(0);
  } else {
    console.log('💥 Bazı schema dosyalarında hatalar bulundu.');
    process.exit(1);
  }
}

// Test dosyaları dizinini oluştur
if (!fs.existsSync(path.dirname(__filename))) {
  fs.mkdirSync(path.dirname(__filename), { recursive: true });
}

validateSchemas();