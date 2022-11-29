% intern, nacional, locales, deportes, cultura <- variables
var 0..9: intern;
var 0..7: nacional;
var 0..5: locales;
var 0..4: deportes;
var 0..3: cultura;

constraint intern >= 5 \/ intern = 0;
constraint nacional >= 4 \/ nacional = 0;
constraint locales >= 2 \/ locales = 0;
constraint deportes >= 2 \/ deportes = 0;
constraint cultura >= 1 \/ cultura = 0;

/*
constraint (intern >= 5 /\ intern <= 9) \/ intern = 0;
constraint (nacional >= 4 /\ nacional <= 7) \/ nacional = 0;
constraint (locales >= 2 /\ locales <= 5) \/ locales = 0;
constraint (deportes >= 2 /\ deportes <= 4) \/ deportes = 0;
constraint (cultura >= 1 /\ cultura <= 3) \/ cultura = 0;

/*
constraint intern <= 9;
constraint nacional <= 7;
constraint locales <= 5;
constraint deportes <= 4;
constraint cultura <= 3;
*/

constraint intern + nacional + locales + deportes + cultura <= 10;

solve maximize intern*1500 + nacional*2000 + locales*1000 + deportes*1500 + cultura*750