/* Warmup-1 Problems */

function nearHundred(n) {
  if ((Math.abs(100 - n) <=10) || (Math.abs(200 - n) <=10)) return true;
  else return false;
}

function lastDigit(a, b, c){
  if (a % 10 == b % 10) return true;
  else return false;
}

function sleepIn(weekday, vacation){
  if (!weekday || vacation) return true;
  else return false;
}

function icyHot(temp1, temp2){
  if ((temp1 < 0 || temp2 < 0) 
      && (temp1 > 100 || temp2 > 100)) return true;
  else return false;
}

function intMax(a, b, c){
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else return c;
}

function hasTeen(a, b, c){
  if ((13 <= a && a <= 19) || 
      (13 <= b && b <= 19) || 
      (13 <= c && c <= 19)) return true;
  else return false;
}

function makes10(a, b){
  if ((a + b == 10) || (a == 10) || (b == 10)) return true;
  else return false;
}

function parrotTrouble(talking, hour){
  if ((talking == true) && (hour < 7 || hour > 20)) return true;
  else return false;
}

/* Logic-1 Problems */

function cigarParty(cigars, isWeekend){
  if (cigars < 40) return false;
  else if (isWeekend) return true;
  else if (cigars <= 60) return true;
  else return false;
}

function less20(n){
  if ((20 - (n % 20) == 1) || (20 - (n % 20) == 2)) return true;
  else return false;
}