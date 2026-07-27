1. for Loop:
Yeh sabse basic tarika hai. Hum manual counter i = 0 se shuru karte hain aur array.length tak chalate hain. Har step par sum update hota rehta hai.
Sabse tezz (Fastest) execution speed.
Code thoda lamba hota hai.

2. forEach():
Yeh JavaScript ka array method hai jo har element ke liye ek callback function chalata hai. Isme hume i ya array length handle nahi karni padti, direct item number mil jata hai.
Clean aur easy to read.
Isko hum beech mein break nahi kar sakte aur callback ki wajah se for loop se thoda slow hota hai.

3. .reduce():
Yeh array ki saari values ko crunch karke ek single value (sum) mein convert kar deta hai. Isme result (accumulator) har step ka total aage paas karta rehta hai.
Shortest code (one-liner) aur modern JS standard.
Beginners ke liye syntax thoda tricky hota hai.

Speed & Method Comparison:
1.for Loop
Fastest(Sabse zyada efficient, kyunki isme koi callback function call nahi hota).
2. forEach() Method
Traditional loop se thoda slow, kyunki har item par callback function execute hota hai.
3. .reduce() Method
Fast (Modern JavaScript engines mein highly optimized hai).
