const fs = require('fs');
let code = fs.readFileSync('lessons/lesson2/module17.js', 'utf8');

const newEmojiLogic = `
                        var emojiMap = {
                            "🏀": ["basketball", "hoop", "dunk", "nba"],
                            "🎮": ["gam", "xbox", "playstation", "nintendo", "pc", "minecraft", "roblox"],
                            "🎸": ["music", "sing", "guitar", "band", "drums", "piano", "bass", "concert"],
                            "💻": ["cod", "program", "hack", "developer", "software", "python", "javascript", "html"],
                            "🎨": ["draw", "art", "paint", "sketch", "design", "color"],
                            "📚": ["read", "book", "novel", "literature", "library", "story"],
                            "⚽": ["sport", "soccer", "football", "goal", "fifa"],
                            "⚾": ["baseball", "mlb", "pitch", "bat"],
                            "🎾": ["tennis", "racket", "wimbledon"],
                            "🎳": ["bowl", "strike", "spare"],
                            "⛳": ["golf", "putt", "hole"],
                            "🎣": ["fish", "catch", "bass", "lake"],
                            "🎿": ["ski", "snowboard", "winter", "mountain"],
                            "🏂": ["snowboarding"],
                            "🚴": ["bike", "bicycl", "cycl"],
                            "🏊": ["swim", "pool", "water", "dive"],
                            "🤸": ["gymnast", "flip", "tumble"],
                            "🤼": ["wrestl", "grapple", "wwe"],
                            "🥋": ["karate", "judo", "martial", "taekwondo", "kung fu"],
                            "🥊": ["box", "fight", "punch"],
                            "🛹": ["skate", "board", "trick", "ollie"],
                            "⛸️": ["ice skat", "figure skat"],
                            "🩰": ["ballet", "dance", "tutu", "choreograph"],
                            "🎭": ["act", "theater", "drama", "play", "stage"],
                            "🎬": ["movi", "film", "cinema", "director", "video"],
                            "📸": ["photo", "camera", "picture", "shoot", "lens"],
                            "🧩": ["puzzle", "jigsaw", "riddle", "brain"],
                            "♟️": ["chess", "checkers", "board game", "strategy"],
                            "🃏": ["card", "poker", "magic", "trick"],
                            "🎲": ["dice", "dnd", "roleplay", "dungeons"],
                            "🧵": ["sew", "knit", "crochet", "yarn", "stitch"],
                            "🧶": ["knitting"],
                            "🛍️": ["shop", "mall", "buy", "cloth"],
                            "🍳": ["cook", "bake", "chef", "food", "kitchen", "recipe"],
                            "🪴": ["plant", "garden", "flower", "grow", "botan"],
                            "🔭": ["stars", "astronomy", "space", "telescope", "planet"],
                            "🔬": ["science", "biology", "chemistry", "physics", "lab"],
                            "🏕️": ["camp", "tent", "nature", "outdoor", "hike"],
                            "✈️": ["travel", "fly", "trip", "vacation", "explore"],
                            "🚗": ["car", "drive", "race", "motor", "engine"],
                            "🚀": ["rocket", "astronaut"],
                            "⛵": ["sail", "boat", "yacht", "sea", "ocean"],
                            "🐎": ["horse", "rid", "equestrian"],
                            "🐕": ["dog", "puppy", "pet", "walk"],
                            "🐈": ["cat", "kitty", "feline"],
                            "🐦": ["bird", "watch"],
                            "🎤": ["sing", "karaoke", "vocal", "rap"],
                            "🎧": ["listen", "podcast", "dj", "headphone"],
                            "🖋️": ["write", "poetry", "journal", "author", "blog"],
                            "🏃": ["run", "jog", "marathon", "track", "sprint"],
                            "🧗": ["climb", "boulder", "rock"],
                            "🧘": ["yoga", "meditat", "zen", "stretch"],
                            "🏄": ["surf", "wave", "beach"],
                            "🏋️": ["weight", "lift", "gym", "workout", "fitness"]
                        };
                        
                        var obj = "⭐"; // default
                        for (var emj in emojiMap) {
                            var keywords = emojiMap[emj];
                            for (var i = 0; i < keywords.length; i++) {
                                if (val.includes(keywords[i])) {
                                    obj = emj;
                                    break;
                                }
                            }
                            if (obj !== "⭐") break;
                        }
`;

const oldLogic = `                        var obj = "⭐";
                        if (val.includes("basketball") || val.includes("hoop")) obj = "🏀";
                        if (val.includes("gam")) obj = "🎮";
                        if (val.includes("music") || val.includes("sing") || val.includes("guitar")) obj = "🎸";
                        if (val.includes("cod") || val.includes("program")) obj = "💻";
                        if (val.includes("draw") || val.includes("art")) obj = "🎨";
                        if (val.includes("read") || val.includes("book")) obj = "📚";
                        if (val.includes("sport") || val.includes("run") || val.includes("soccer")) obj = "⚽";`;

code = code.replace(oldLogic, newEmojiLogic);
fs.writeFileSync('lessons/lesson2/module17.js', code);
console.log('Replaced successfully');
