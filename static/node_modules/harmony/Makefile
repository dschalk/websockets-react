
test:
	@CONNECT_ENV=test ./support/expresso/bin/expresso \
		-I support/connect/lib

index.html: index.js
	dox --title "Harmony" \
		--ribbon "http://github.com/originalmachine/harmony" \
		$< > $@

.PHONY: test