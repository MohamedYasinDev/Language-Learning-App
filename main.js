// App State
const STATE = {
  lang: null,
  category: 'vocab',
  index: 0,
  flashList: [],
  dailyItem: null,
  learnData: {},
  speechOn: true,
  firebaseEnabled: false,
  firebaseUser: null,
  quiz: null
};

// Sample content dataset
const DATA = {
  "Spanish": {
    code: "es-ES",
    vocab: [
      {id:"es_v1", word:"Hola", trans:"Hello"},
      {id:"es_v2", word:"Gracias", trans:"Thank you"},
      {id:"es_v3", word:"Perro", trans:"Dog"},
      {id:"es_v4", word:"Casa", trans:"House"},
      {id:"es_v5", word:"Agua", trans:"Water"},
      {id:"es_v6", word:"Amigo", trans:"Friend"},
      {id:"es_v7", word:"Libro", trans:"Book"}
    ],
    phrases: [
      {id:"es_p1", word:"¿Cómo estás?", trans:"How are you?"},
      {id:"es_p2", word:"Mucho gusto", trans:"Nice to meet you"},
      {id:"es_p3", word:"Buenos días", trans:"Good morning"},
      {id:"es_p4", word:"Buenas noches", trans:"Good night"},
      {id:"es_p5", word:"¿Dónde está el baño?", trans:"Where is the bathroom?"},
      {id:"es_p6", word:"Hasta luego", trans:"See you later"},
      {id:"es_p7", word:"¿Qué hora es?", trans:"What time is it?"}
    ],
    grammar: [
      {id:"es_g1", word:"El/La - definite articles", trans:"El (m) / La (f) for nouns"},
      {id:"es_g2", word:"Present -AR verbs", trans:"hablar -> yo hablo"},
      {id:"es_g3", word:"Plural nouns", trans:"-s for vowels, -es for consonants"},
      {id:"es_g4", word:"Adjective agreement", trans:"Adjectives match gender and number"},
      {id:"es_g5", word:"Ser vs Estar", trans:"Ser for permanent, Estar for temporary"},
      {id:"es_g6", word:"Past tense -AR verbs", trans:"hablé, hablaste, habló..."},
      {id:"es_g7", word:"Future tense", trans:"hablaré, hablarás, hablará..."}
    ]
  },
  "English": {
    code: "en-US",
    vocab: [
      {id:"en_v1", word:"Hello", trans:"Hello"},
      {id:"en_v2", word:"Thank you", trans:"Thank you"},
      {id:"en_v3", word:"Dog", trans:"Dog"},
      {id:"en_v4", word:"House", trans:"House"},
      {id:"en_v5", word:"Water", trans:"Water"},
      {id:"en_v6", word:"Friend", trans:"Friend"},
      {id:"en_v7", word:"Book", trans:"Book"}
    ],
    phrases: [
      {id:"en_p1", word:"How are you?", trans:"How are you?"},
      {id:"en_p2", word:"Nice to meet you", trans:"Nice to meet you"},
      {id:"en_p3", word:"Good morning", trans:"Good morning"},
      {id:"en_p4", word:"Good night", trans:"Good night"},
      {id:"en_p5", word:"Where is the bathroom?", trans:"Where is the bathroom?"},
      {id:"en_p6", word:"See you later", trans:"See you later"},
      {id:"en_p7", word:"What time is it?", trans:"What time is it?"}
    ],
    grammar: [
      {id:"en_g1", word:"Articles", trans:"a/an for indefinite, the for definite"},
      {id:"en_g2", word:"Present simple", trans:"I speak, you speak, he/she speaks"},
      {id:"en_g3", word:"Past simple", trans:"I spoke, you spoke, he/she spoke"},
      {id:"en_g4", word:"Future simple", trans:"I will speak, you will speak"},
      {id:"en_g5", word:"Plural nouns", trans:"Add -s or -es"},
      {id:"en_g6", word:"Adjective order", trans:"Determiner + adjective + noun"},
      {id:"en_g7", word:"Question formation", trans:"Do/Does + subject + verb?"}
    ]
  },
  "Somali": {
    code: "so-SO",
    vocab: [
      {id:"so_v1", word:"Biyo", trans:"Water"},
      {id:"so_v2", word:"Guri", trans:"House"},
      {id:"so_v3", word:"Eey", trans:"Dog"},
      {id:"so_v4", word:"Saaxiib", trans:"Friend"},
      {id:"so_v5", word:"Buug", trans:"Book"},
      {id:"so_v6", word:"Cunto", trans:"Food"},
      {id:"so_v7", word:"Qorrax", trans:"Sun"}
    ],
    phrases: [
      {id:"so_p1", word:"Sidee tahay?", trans:"How are you?"},
      {id:"so_p2", word:"Waan ku faraxsanahay inaan ku arko", trans:"Nice to meet you"},
      {id:"so_p3", word:"Subax wanaagsan", trans:"Good morning"},
      {id:"so_p4", word:"Habeen wanaagsan", trans:"Good night"},
      {id:"so_p5", word:"Musqusha xaggee tahay?", trans:"Where is the bathroom?"},
      {id:"so_p6", word:"Ilaa markale", trans:"See you later"},
      {id:"so_p7", word:"Saacad intee tahay?", trans:"What time is it?"}
    ],
    grammar: [
      {id:"so_g1", word:"Magac", trans:"Lagu magacaabo wax"},
      {id:"so_g2", word:"Fal", trans:"Falalka waa la sameeyaa"},
      {id:"so_g3", word:"Jamac", trans:"Magacyada jamac ahaan loo adeegsado"},
      {id:"so_g4", word:"Waqtiga hadda", trans:"Waxqabadka hadda"},
      {id:"so_g5", word:"Mustaqbal", trans:"Waxqabadka mustaqbalka"},
      {id:"so_g6", word:"Shuruud", trans:"Shuruudaha jumlada"},
      {id:"so_g7", word:"Su'aal", trans:"Su'aal sameynta"}
    ]
  },
  
  // ... Halkan ayaad ku dari kartaa French, German, Italian, Portuguese, Japanese, Chinese, Russian, Korean isla qaabkaas
  "French": {
  code: "fr-FR",
  vocab: [
    {id:"fr_v1", word:"Bonjour", trans:"Hello"},
    {id:"fr_v2", word:"Merci", trans:"Thank you"},
    {id:"fr_v3", word:"Chat", trans:"Cat"},
    {id:"fr_v4", word:"Maison", trans:"House"},
    {id:"fr_v5", word:"Eau", trans:"Water"},
    {id:"fr_v6", word:"Ami", trans:"Friend"},
    {id:"fr_v7", word:"Livre", trans:"Book"}
  ],
  phrases: [
    {id:"fr_p1", word:"Comment ça va?", trans:"How's it going?"},
    {id:"fr_p2", word:"Enchanté", trans:"Nice to meet you"},
    {id:"fr_p3", word:"Bonjour", trans:"Good morning"},
    {id:"fr_p4", word:"Bonne nuit", trans:"Good night"},
    {id:"fr_p5", word:"Où sont les toilettes?", trans:"Where is the bathroom?"},
    {id:"fr_p6", word:"À plus tard", trans:"See you later"},
    {id:"fr_p7", word:"Quelle heure est-il?", trans:"What time is it?"}
  ],
  grammar: [
    {id:"fr_g1", word:"Le/La - articles", trans:"Le (m) / La (f) for nouns"},
    {id:"fr_g2", word:"Present -ER verbs", trans:"parler -> je parle"},
    {id:"fr_g3", word:"Plural nouns", trans:"Add -s for plural"},
    {id:"fr_g4", word:"Adjective agreement", trans:"Adjectives match gender and number"},
    {id:"fr_g5", word:"Ser vs Être", trans:"Être for permanent, Avoir for auxiliary"},
    {id:"fr_g6", word:"Past tense -ER verbs", trans:"parlé -> j'ai parlé"},
    {id:"fr_g7", word:"Future tense", trans:"je parlerai, tu parleras"}
  ]
},

"German": {
  code: "de-DE",
  vocab: [
    {id:"de_v1", word:"Hallo", trans:"Hello"},
    {id:"de_v2", word:"Danke", trans:"Thank you"},
    {id:"de_v3", word:"Hund", trans:"Dog"},
    {id:"de_v4", word:"Haus", trans:"House"},
    {id:"de_v5", word:"Wasser", trans:"Water"},
    {id:"de_v6", word:"Freund", trans:"Friend"},
    {id:"de_v7", word:"Buch", trans:"Book"}
  ],
  phrases: [
    {id:"de_p1", word:"Wie geht's?", trans:"How are you?"},
    {id:"de_p2", word:"Freut mich", trans:"Nice to meet you"},
    {id:"de_p3", word:"Guten Morgen", trans:"Good morning"},
    {id:"de_p4", word:"Gute Nacht", trans:"Good night"},
    {id:"de_p5", word:"Wo ist die Toilette?", trans:"Where is the bathroom?"},
    {id:"de_p6", word:"Bis später", trans:"See you later"},
    {id:"de_p7", word:"Wie spät ist es?", trans:"What time is it?"}
  ],
  grammar: [
    {id:"de_g1", word:"Der/Die/Das - articles", trans:"Der (m) / Die (f) / Das (n)"},
    {id:"de_g2", word:"Present tense", trans:"sprechen -> ich spreche"},
    {id:"de_g3", word:"Plural nouns", trans:"Add -e/-en/-er depending on noun"},
    {id:"de_g4", word:"Adjective endings", trans:"Adjectives change with case, gender, number"},
    {id:"de_g5", word:"Past tense", trans:"ich sprach, du sprachst"},
    {id:"de_g6", word:"Future tense", trans:"ich werde sprechen"},
    {id:"de_g7", word:"Separable verbs", trans:"Prefix moves to end in present tense"}
  ]
},

"Italian": {
  code: "it-IT",
  vocab: [
    {id:"it_v1", word:"Ciao", trans:"Hello/Goodbye"},
    {id:"it_v2", word:"Grazie", trans:"Thank you"},
    {id:"it_v3", word:"Cane", trans:"Dog"},
    {id:"it_v4", word:"Casa", trans:"House"},
    {id:"it_v5", word:"Acqua", trans:"Water"},
    {id:"it_v6", word:"Amico", trans:"Friend"},
    {id:"it_v7", word:"Libro", trans:"Book"}
  ],
  phrases: [
    {id:"it_p1", word:"Come stai?", trans:"How are you?"},
    {id:"it_p2", word:"Piacere di conoscerti", trans:"Nice to meet you"},
    {id:"it_p3", word:"Buongiorno", trans:"Good morning"},
    {id:"it_p4", word:"Buonanotte", trans:"Good night"},
    {id:"it_p5", word:"Dov'è il bagno?", trans:"Where is the bathroom?"},
    {id:"it_p6", word:"A dopo", trans:"See you later"},
    {id:"it_p7", word:"Che ora è?", trans:"What time is it?"}
  ],
  grammar: [
    {id:"it_g1", word:"Il/La - articles", trans:"Il (m) / La (f) for nouns"},
    {id:"it_g2", word:"Present -ARE verbs", trans:"parlare -> io parlo"},
    {id:"it_g3", word:"Plural nouns", trans:"Add -i/-e depending on gender"},
    {id:"it_g4", word:"Adjective agreement", trans:"Adjectives match gender and number"},
    {id:"it_g5", word:"Past tense -ARE verbs", trans:"parlato -> ho parlato"},
    {id:"it_g6", word:"Future tense", trans:"parlerò, parlerai"},
    {id:"it_g7", word:"Reflexive verbs", trans:"alzarsi -> mi alzo, ti alzi"}
  ]
}

  
};

// DOM Helpers
function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return Array.from(document.querySelectorAll(selector));
}

// Storage Management
const STORAGE_KEY = 'linguamini_v2';

function loadStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      for (const lang in parsed) {
        if (parsed[lang].known) {
          parsed[lang].known = new Set(parsed[lang].known);
        }
      }
      STATE.learnData = parsed;
      updateStorageStatus('Data loaded from local storage');
    } catch (e) {
      console.warn('Corrupt storage, resetting', e);
      STATE.learnData = {};
      updateStorageStatus('Local storage reset');
    }
  } else {
    updateStorageStatus('No local data found');
  }
}

function saveStorage() {
  const toSave = {};
  for (const lang in STATE.learnData) {
    toSave[lang] = {...STATE.learnData[lang]};
    if (toSave[lang].known instanceof Set) {
      toSave[lang].known = Array.from(toSave[lang].known);
    }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  updateStorageStatus('Data saved locally');
}

function updateStorageStatus(message) {
  const statusEl = $('#storageStatus');
  if (statusEl) {
    statusEl.textContent = message;
  }
}

// UI Initialization
function populateLanguageSelect() {
  const select = $('#langSelect');
  select.innerHTML = '';
  
  Object.keys(DATA).forEach(lang => {
    const option = document.createElement('option');
    option.value = lang;
    option.textContent = lang;
    select.appendChild(option);
  });
  
  if (!STATE.lang && Object.keys(DATA).length > 0) {
    STATE.lang = Object.keys(DATA)[0];
    select.value = STATE.lang;
  }
}

function populateCategoryData() {
  const select = $('#categorySelect');
  select.innerHTML = '';
  
  const categories = ['vocab', 'phrases', 'grammar'];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    select.appendChild(option);
  });
  
  select.value = STATE.category;
}

function updateStatus() {
  $('#statusLine').textContent = STATE.lang || 'No language selected';
  const knownCount = (STATE.learnData[STATE.lang]?.known?.size) || 0;
  $('#knownCount').textContent = knownCount;
  
  const progressPercent = getProgressPercent();
  $('#progressBar').style.width = `${progressPercent}%`;
}

function getProgressPercent() {
  if (!STATE.lang || !DATA[STATE.lang]) return 0;
  
  const langData = DATA[STATE.lang];
  const totalItems = Object.values(langData).reduce((sum, items) => sum + items.length, 0);
  const knownItems = STATE.learnData[STATE.lang]?.known?.size || 0;
  
  return totalItems > 0 ? Math.min(Math.round((knownItems / totalItems) * 100), 100) : 0;
}

// Tab Navigation
function showTab(tabName) {
  $all('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  $(`#${tabName}View`).style.display = 'block';
}

// Daily Lesson
function pickDaily() {
  if (!STATE.lang) return;
  
  const store = ensureLangStore(STATE.lang);
  const today = new Date().toISOString().slice(0, 10);
  
  // If already chosen today, keep it
  if (store.lastDaily === today && store.dailyId) {
    const allItems = getItemsForCurrent();
    const foundItem = allItems.find(item => item.id === store.dailyId);
    if (foundItem) {
      STATE.dailyItem = foundItem;
      renderDaily();
      return;
    }
  }
  
  // Pick new item not in known if possible
  const allItems = getItemsForCurrent();
  const candidates = allItems.filter(item => !store.known.has(item.id));
  const pool = candidates.length > 0 ? candidates : allItems;
  
  if (pool.length === 0) {
    STATE.dailyItem = null;
    renderDaily();
    return;
  }
  
  const randomIndex = Math.floor(Math.random() * pool.length);
  const selectedItem = pool[randomIndex];
  
  store.dailyId = selectedItem.id;
  store.lastDaily = today;
  STATE.dailyItem = selectedItem;
  
  saveStorage();
  renderDaily();
}

function renderDaily() {
  const wrap = $('#dailyCardWrap');
  wrap.innerHTML = '';
  
  if (!STATE.dailyItem) {
    wrap.textContent = 'No daily item available.';
    return;
  }
  
  const flashcard = createFlashcardElement(STATE.dailyItem);
  wrap.appendChild(flashcard.container);
  updateStatus();
}

// Flashcards
function createFlashcardElement(item) {
  const container = document.createElement('div');
  container.className = 'flashcard';
  
  const inner = document.createElement('div');
  inner.className = 'fc-inner';
  
  const front = document.createElement('div');
  front.className = 'fc-face fc-front';
  front.innerHTML = `
    <div class="word">${item.word}</div>
    <div class="trans">${item.trans}</div>
  `;
  
  const back = document.createElement('div');
  back.className = 'fc-face fc-back';
  back.innerHTML = `
    <div style="font-weight:600">Notes</div>
    <div class="muted" style="margin-top:8px">Example or grammar hint here.</div>
  `;
  
  inner.appendChild(front);
  inner.appendChild(back);
  container.appendChild(inner);
  
  container.addEventListener('click', () => {
    inner.classList.toggle('flipped');
  });
  
  return { container, inner, front, back };
}

function renderFlashcardsList() {
  const area = $('#flashcardArea');
  area.innerHTML = '';
  
  if (STATE.flashList.length === 0) {
    area.textContent = 'No items in this category.';
    return;
  }
  
  const currentIndex = Math.min(Math.max(STATE.index, 0), STATE.flashList.length - 1);
  const currentItem = STATE.flashList[currentIndex];
  
  const flashcard = createFlashcardElement(currentItem);
  area.appendChild(flashcard.container);
  
  // Store current element for controls
  area._current = { item: currentItem, el: flashcard };
  updateStatus();
}

// Quiz
function startQuiz(count) {
  const pool = getItemsForCurrent();
  if (pool.length === 0) {
    alert('No items to quiz');
    return;
  }
  
  const usedIds = new Set();
  const questions = [];
  const quizSize = Math.min(count, pool.length);
  
  while (questions.length < quizSize) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    const selectedItem = pool[randomIndex];
    
    if (usedIds.has(selectedItem.id)) continue;
    usedIds.add(selectedItem.id);
    
    // Prepare answer choices
    const choices = [selectedItem.trans];
    
    // Add distractors
    while (choices.length < 4) {
      const randomItem = pool[Math.floor(Math.random() * pool.length)];
      if (!choices.includes(randomItem.trans)) {
        choices.push(randomItem.trans);
      }
    }
    
    // Shuffle choices
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    
    questions.push({
      q: selectedItem.word,
      a: selectedItem.trans,
      choices,
      id: selectedItem.id
    });
  }
  
  STATE.quiz = {
    questions,
    currentIndex: 0,
    correct: 0
  };
  
  renderQuiz();
}

function renderQuiz() {
  const area = $('#quizArea');
  area.innerHTML = '';
  
  if (!STATE.quiz) {
    area.textContent = 'No quiz running.';
    return;
  }
  
  const { questions, currentIndex, correct } = STATE.quiz;
  
  if (currentIndex >= questions.length) {
    // Quiz completed
    const scorePercent = Math.round((correct / questions.length) * 100);
    
    area.innerHTML = `
      <div style="font-weight:700;text-align:center">Quiz Complete</div>
      <div style="text-align:center;margin:10px 0">
        <div style="font-size:24px;font-weight:bold;color:${scorePercent >= 70 ? 'var(--success)' : 'var(--danger)'}">
          ${correct} / ${questions.length} (${scorePercent}%)
        </div>
      </div>
    `;
    
    // Save quiz results
    const langStore = ensureLangStore(STATE.lang);
    langStore.progress = langStore.progress || {};
    langStore.progress.lastQuiz = {
      score: correct,
      total: questions.length,
      date: new Date().toISOString()
    };
    
    saveStorage();
    updateStatus();
    $('#quizScore').textContent = `Last: ${correct}/${questions.length}`;
    return;
  }
  
  const currentQuestion = questions[currentIndex];
  const questionElement = document.createElement('div');
  
  questionElement.innerHTML = `
    <div style="font-weight:700;margin-bottom:12px;font-size:18px">
      ${currentQuestion.q}
    </div>
  `;
  
  const choicesList = document.createElement('div');
  choicesList.className = 'quiz-list';
  
  currentQuestion.choices.forEach(choice => {
    const choiceElement = document.createElement('div');
    choiceElement.className = 'choice';
    choiceElement.textContent = choice;
    
    choiceElement.addEventListener('click', () => {
      if (choiceElement.classList.contains('clicked')) return;
      choiceElement.classList.add('clicked');
      
      if (choice === currentQuestion.a) {
        choiceElement.classList.add('correct');
        STATE.quiz.correct++;
        
        // Mark as known if correct
        ensureLangStore(STATE.lang).known.add(currentQuestion.id);
        saveStorage();
        updateStatus();
      } else {
        choiceElement.classList.add('wrong');
        // Highlight correct answer
        Array.from(choicesList.children).forEach(c => {
          if (c.textContent === currentQuestion.a) {
            c.classList.add('correct');
          }
        });
      }
      
      // Move to next question after delay
      setTimeout(() => {
        STATE.quiz.currentIndex++;
        renderQuiz();
      }, 1000);
    });
    
    choicesList.appendChild(choiceElement);
  });
  
  questionElement.appendChild(choicesList);
  area.appendChild(questionElement);
}

// Library
function renderLibrary(filter = '') {
  const list = $('#libraryList');
  list.innerHTML = '';
  
  const items = getItemsForCurrent().filter(item => {
    const searchText = `${item.word} ${item.trans}`.toLowerCase();
    return searchText.includes(filter.toLowerCase());
  });
  
  if (items.length === 0) {
    list.textContent = 'No items found.';
    return;
  }
  
  items.forEach(item => {
    const row = document.createElement('div');
    row.className = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.padding = '8px 0';
    row.style.borderBottom = '1px solid #f0f0f0';
    
    row.innerHTML = `
      <div>
        <strong>${item.word}</strong>
        <div class="muted" style="font-size:13px">${item.trans}</div>
      </div>
    `;
    
    const actions = document.createElement('div');
    actions.className = 'row';
    
    const speakButton = document.createElement('button');
    speakButton.className = 'small-btn';
    speakButton.textContent = '🔊';
    speakButton.title = 'Pronounce';
    speakButton.addEventListener('click', () => speak(item.word));
    
    const markKnownButton = document.createElement('button');
    markKnownButton.className = 'small-btn';
    markKnownButton.textContent = 'Mark Known';
    markKnownButton.addEventListener('click', () => {
      ensureLangStore(STATE.lang).known.add(item.id);
      saveStorage();
      updateStatus();
      renderLibrary($('#search').value);
    });
    
    actions.appendChild(speakButton);
    actions.appendChild(markKnownButton);
    row.appendChild(actions);
    list.appendChild(row);
  });
}

// Speech Synthesis
function speak(text) {
  if (!STATE.speechOn || !STATE.lang) return;
  
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = DATA[STATE.lang]?.code || 'en-US';
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn('Speech synthesis not supported');
  }
}

// Helper Functions
function getItemsForCurrent() {
  if (!STATE.lang || !DATA[STATE.lang]) return [];
  return DATA[STATE.lang][STATE.category] || [];
}

function ensureLangStore(lang) {
  if (!STATE.learnData[lang]) {
    STATE.learnData[lang] = {
      known: new Set(),
      progress: {},
      lastDaily: null,
      dailyId: null
    };
  }
  
  // Ensure known is a Set
  if (!(STATE.learnData[lang].known instanceof Set)) {
    STATE.learnData[lang].known = new Set(STATE.learnData[lang].known || []);
  }
  
  return STATE.learnData[lang];
}

// Data Import/Export
function serializeForExport() {
  const out = {};
  
  for (const lang in STATE.learnData) {
    out[lang] = {...STATE.learnData[lang]};
    if (out[lang].known instanceof Set) {
      out[lang].known = Array.from(out[lang].known);
    }
  }
  
  return {
    learnData: out,
    settings: {
      speechOn: STATE.speechOn,
      version: '1.0'
    }
  };
}

function importFromDump(dump) {
  if (!dump?.learnData) {
    alert('Invalid import file format');
    return;
  }
  
  STATE.learnData = {};
  
  for (const lang in dump.learnData) {
    STATE.learnData[lang] = {...dump.learnData[lang]};
    STATE.learnData[lang].known = new Set(dump.learnData[lang].known || []);
  }
  
  if (dump.settings?.speechOn !== undefined) {
    STATE.speechOn = dump.settings.speechOn;
    $('#toggleSpeech').textContent = `Toggle Speech: ${STATE.speechOn ? 'On' : 'Off'}`;
  }
  
  saveStorage();
  loadStorage();
  pickDaily();
  renderLibrary($('#search').value);
  updateStatus();
  renderProfileDump();
  
  alert('Import successful!');
}

function renderProfileDump() {
  const el = $('#profileDump');
  if (!el) return;
  
  const profileData = {
    lang: STATE.lang,
    category: STATE.category,
    speechOn: STATE.speechOn,
    storage: {}
  };
  
  for (const lang in STATE.learnData) {
    profileData.storage[lang] = {
      knownCount: STATE.learnData[lang].known?.size || 0,
      progress: STATE.learnData[lang].progress || {},
      lastDaily: STATE.learnData[lang].lastDaily
    };
  }
  
  if (STATE.firebaseUser) {
    profileData.firebase = {
      uid: STATE.firebaseUser.uid,
      email: STATE.firebaseUser.email
    };
  }
  
  el.textContent = JSON.stringify(profileData, null, 2);
}

// Event Handlers
function wireEvents() {
  // Tab navigation
  $all('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $all('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      showTab(tab.dataset.tab);
    });
  });
  
  // Language selection
  $('#langSelect').addEventListener('change', (e) => {
    STATE.lang = e.target.value;
    STATE.index = 0;
    STATE.flashList = getItemsForCurrent();
    
    populateCategoryData();
    pickDaily();
    renderFlashcardsList();
    renderLibrary($('#search').value);
    updateStatus();
    renderProfileDump();
  });
  
  // Category selection
  $('#categorySelect').addEventListener('change', (e) => {
    STATE.category = e.target.value;
    STATE.index = 0;
    STATE.flashList = getItemsForCurrent();
    
    renderFlashcardsList();
    pickDaily();
    renderLibrary($('#search').value);
  });
  
  // Daily lesson controls
  $('#markKnown').addEventListener('click', () => {
    if (!STATE.dailyItem) return;
    
    ensureLangStore(STATE.lang).known.add(STATE.dailyItem.id);
    saveStorage();
    updateStatus();
    renderProfileDump();
  });
  
  $('#nextDaily').addEventListener('click', () => {
    const store = ensureLangStore(STATE.lang);
    store.lastDaily = null;
    saveStorage();
    pickDaily();
  });
  
  $('#pronounceDaily').addEventListener('click', () => {
    if (STATE.dailyItem) speak(STATE.dailyItem.word);
  });
  
  // Flashcard controls
  $('#flipCard').addEventListener('click', () => {
    const area = $('#flashcardArea');
    if (area._current) {
      area._current.el.inner.classList.toggle('flipped');
    }
  });
  
  $('#nextCard').addEventListener('click', () => {
    STATE.index = Math.min(STATE.index + 1, STATE.flashList.length - 1);
    renderFlashcardsList();
  });
  
  $('#prevCard').addEventListener('click', () => {
    STATE.index = Math.max(STATE.index - 1, 0);
    renderFlashcardsList();
  });
  
  $('#pronounceBtn').addEventListener('click', () => {
    const area = $('#flashcardArea');
    if (area._current) speak(area._current.item.word);
  });
  
  $('#addKnown').addEventListener('click', () => {
    const area = $('#flashcardArea');
    if (area._current) {
      const currentItem = area._current.item;
      const langStore = ensureLangStore(STATE.lang);
      langStore.known.add(currentItem.id);
      
      saveStorage();
      updateStatus();
      renderProfileDump();
      
      const flashcard = area._current.el;
      flashcard.front.innerHTML = `
        <div style="color:var(--success);font-size:24px;">✓</div>
        <div class="word">${currentItem.word}</div>
        <div class="trans" style="color:var(--success)">Marked as known!</div>
      `;
      
      setTimeout(() => {
        STATE.index = Math.min(STATE.index + 1, STATE.flashList.length - 1);
        renderFlashcardsList();
      }, 1000);
    }
  });
  
  // Quiz controls
  $('#startQuiz').addEventListener('click', () => {
    const count = parseInt($('#quizCount').value);
    startQuiz(count);
  });
  
  $('#practiceQuiz').addEventListener('click', () => {
    startQuiz(5);
  });
  
  $('#dailyAgain').addEventListener('click', () => {
    pickDaily();
  });
  
  $('#toggleSpeech').addEventListener('click', () => {
    STATE.speechOn = !STATE.speechOn;
    $('#toggleSpeech').textContent = `Toggle Speech: ${STATE.speechOn ? 'On' : 'Off'}`;
  });
  
  // Search functionality
  $('#search').addEventListener('input', (e) => {
    renderLibrary(e.target.value);
  });
  
  // Import/Export buttons
  $('#exportBtn').addEventListener('click', () => {
    const data = serializeForExport();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `linguamini-export-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
  
  $('#importBtn').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          importFromDump(data);
        } catch (err) {
          alert('Error parsing file: ' + err.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  });
  
  $('#clearBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all local progress?')) {
      localStorage.removeItem(STORAGE_KEY);
      STATE.learnData = {};
      saveStorage();
      loadStorage();
      pickDaily();
      renderLibrary($('#search').value);
      updateStatus();
      renderProfileDump();
      alert('Local data has been reset');
    }
  });
}

// Initialize the app
function initApp() {
  loadStorage();
  populateLanguageSelect();
  populateCategoryData();
  pickDaily();
  updateStatus();
  wireEvents();
}

// Start the app
initApp();


