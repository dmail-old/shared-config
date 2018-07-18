/*
for whatever freaking reason if we add eslint or prettier as a dependency to this package
npm will throw Maximum call stack size exceeded when trying to install other linked package
I'm freaking tired of npm non robustness on linked package subject so following rule :
DONT ADD ANY DEPENDENCY TO THIS (deepmerge is an exception because does not crash npm for whatever reason)
and this folder don't have local eslint nor local prettier, tant pis
*/
