import 'https://unpkg.com/expect/index.js';
import 'https://unpkg.com/mocha/mocha.js';

mocha.setup('bdd');

import './sum.test.js';

mocha.checkLeaks();
mocha.run();