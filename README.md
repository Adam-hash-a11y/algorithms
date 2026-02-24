I have fixed the vulnarability found of minimatch.
I wanted to patch every dependency on its own and that didn't work.
jest >=19.1.0-alpha.eed82034
this means any version above 19.1.0-alpha.eed82034 is vulnrable, in this case I have 30.20.0 which falls in the vulnrable range.
going back to and older version than 19 is a bad idea cause that version might be outdated.
So I adressed teh root cause => minimatch
Any minimatch version strictly lower than 10.2.1 have a ReDos vulnarabilty
To fix this I added overrides to force minimatch@^10.2.1 across all dependencies.
=> 0 vulnrabities.
