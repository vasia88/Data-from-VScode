function multiply(a, b) {
    var aa = [...a].reverse(),
        bb = [...b].reverse(),
        p = [],
        i, j;

    for (i = 0; i < aa.length; i++) {
        for (j = 0; j < bb.length; j++) {
            if (!p[i + j]) p[i + j] = 0;
            p[i + j] += aa[i] * bb[j];
            if (p[i + j] > 9) {
                if (!p[i + j + 1]) p[i + j + 1] = 0;
                p[i + j + 1] += Math.floor(p[i + j] / 10);
                p[i + j] %= 10;
            }
        }
    }
    return p
        .reverse()
        .filter((valid => (v, i, { length }) => valid = +v || valid || i + 1 === length)(false))
        .join('');
}





function multiply(a, b) {
	var aa = a.split('').reverse();
	var bb = b.split('').reverse();

	var stack = [];

	for (var i = 0; i < aa.length; i++) {
		for (var j = 0; j < bb.length; j++) {
			var m = aa[i] * bb[j];
			stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
		}
	}

	for (var i = 0; i < stack.length; i++) {
		var num = stack[i] % 10;
		var move = Math.floor(stack[i] / 10);
		stack[i] = num;

		if (stack[i + 1])
			stack[i + 1] += move;
		else if (move != 0)
			stack[i + 1] = move;
	}


	return stack.reverse().join('').replace(/^(0(?!$))+/, "");
}