const ecoCodes = {
    "A00":"Polish (Sokolsky)",
    "A01":"Nimzovich-Larsen Attack",
    "A02":"Bird's Opening (A02)",
    "A03":"Bird's Opening (A03)",
    "A04":"Reti Opening (A04)",
    "A05":"Reti Opening (A05)",
    "A06":"Reti Opening (A06)",
    "A07":"Reti Opening (A07)",
    "A08":"Reti Opening (A08)",
    "A09":"Reti Opening (A09)",
    "A10":"English Opening (A10)",
    "A11":"English Opening  (A11)",
    "A12":"English Opening  (A12)",
    "A13":"English Opening  (A13)",
    "A14":"English Opening  (A14)",
    "A15":"English Opening  (A15)",
    "A16":"English Opening  (A16)",
    "A17":"English Opening  (A17)",
    "A18":"English Opening  (A18)",
    "A19":"English Opening  (A19)",
    "A20":"English Opening  (A20)",
    "A21":"English Opening  (A21)",
    "A22":"English Opening  (A22)",
    "A23":"English Opening  (A23)",
    "A24":"English Opening  (A24)",
    "A25":"English Opening  (A25)",
    "A26":"English Opening  (A26)",
    "A27":"English Opening  (A27)",
    "A28":"English Opening  (A28)",
    "A29":"English Opening  (A29)",
    "A30":"English Opening  (A30)",
    "A31":"English Opening  (A31)",
    "A32":"English Opening  (A32)",
    "A33":"English Opening  (A33)",
    "A34":"English Opening  (A34)",
    "A35":"English Opening  (A35)",
    "A36":"English Opening  (A36)",
    "A37":"English Opening  (A37)",
    "A38":"English Opening  (A38)",
    "A39":"English Opening  (A39)",
    "A40":"Queen's Pawn Opening (A40)",
    "A41":"Queen's Pawn Opening (A41)",
    "A42":"Modern Defense, Averbakh system",
    "A43":"Old Benoni defence (A43)",
    "A44":"Old Benoni defence (A44)",
    "A45":"Queen's pawn game (A45)",
    "A46":"Queen's pawn game (A46)",
    "A47":"Queen's Indian defence",
    "A48":"King's Indian, East Indian defence (A48)",
    "A49":"King's Indian, East Indian defence (A49)",
    "A50":"Queen's pawn game",
    "A51":"Budapest defence (A51)",
    "A52":"Budapest defence (A52)",
    "A53":"Old Indian defence (A53)",
    "A54":"Old Indian defence (A54)",
    "A55":"Old Indian defence (A55)",
    "A56":"Benoni defence",
    "A57":"Benko gambit (A57)",
    "A58":"Benko gambit (A58)",
    "A59":"Benko gambit (A59)",
    "A60":"Benoni defence (A60)",
    "A61":"Benoni defence (A61)",
    "A62":"Benoni defence (A62)",
    "A63":"Benoni defence (A63)",
    "A64":"Benoni defence (A64)",
    "A65":"Benoni defence (A65)",
    "A66":"Benoni defence (A66)",
    "A67":"Benoni defence (A67)",
    "A68":"Benoni defence (A68)",
    "A69":"Benoni defence (A69)",
    "A70":"Benoni defence (A70)",
    "A71":"Benoni defence (A71)",
    "A72":"Benoni defence (A72)",
    "A73":"Benoni defence (A73)",
    "A74":"Benoni defence (A74)",
    "A75":"Benoni defence (A75)",
    "A76":"Benoni defence (A76)",
    "A77":"Benoni defence (A77)",
    "A78":"Benoni defence (A78)",
    "A79":"Benoni defence (A79)",
    "A80":"Dutch (A80)",
    "A81":"Dutch (A81)",
    "A82":"Dutch (A82)",
    "A83":"Dutch (A83)",
    "A84":"Dutch (A84)",
    "A85":"Dutch (A85)",
    "A86":"Dutch (A86)",
    "A87":"Dutch (A87)",
    "A88":"Dutch (A88)",
    "A89":"Dutch (A89)",
    "A90":"Dutch (A90)",
    "A91":"Dutch (A91)",
    "A92":"Dutch (A92)",
    "A93":"Dutch (A93)",
    "A94":"Dutch (A94)",
    "A95":"Dutch (A95)",
    "A96":"Dutch (A96)",
    "A97":"Dutch (A97)",
    "A97":"Dutch (A98)",
    "A99":"Dutch (A99)",
    "B00":"King's pawn opening",
    "B01":"Scandinavian (centre counter) defence",
    "B02":"Alekhine's defence (B02)",
    "B03":"Alekhine's defence (B03)",
    "B04":"Alekhine's defence (B04)",
    "B05":"Alekhine's defence (B05)",
    "B06":"Robatsch (modern) defence",
    "B07":"Pirc defence (B07)",
    "B08":"Pirc defence (B08)",
    "B09":"Pirc defence (B09)",
    "B10":"Caro-Kann defence (B10)",
    "B11":"Caro-Kann defence (B11)",
    "B12":"Caro-Kann defence (B12)",
    "B13":"Caro-Kann defence (B13)",
    "B14":"Caro-Kann defence (B14)",
    "B15":"Caro-Kann defence (B15)",
    "B16":"Caro-Kann defence (B16)",
    "B17":"Caro-Kann defence (B17)",
    "B18":"Caro-Kann defence (B18)",
    "B19":"Caro-Kann defence (B19)",
    "B20":"Sicilian defence (B20)",
    "B21":"Sicilian defence (B21)",
    "B22":"Sicilian defence (B22)",
    "B23":"Sicilian defence (B23)",
    "B24":"Sicilian defence (B24)",
    "B25":"Sicilian defence (B25)",
    "B26":"Sicilian defence (B26)",
    "B27":"Sicilian defence (B27)",
    "B28":"Sicilian defence (B28)",
    "B29":"Sicilian defence (B29)",
    "B30":"Sicilian defence (B30)",
    "B31":"Sicilian defence (B31)",
    "B33":"Sicilian defence (B33)",
    "B33":"Sicilian defence (B33)",
    "B34":"Sicilian defence (B34)",
    "B35":"Sicilian defence (B35)",
    "B36":"Sicilian defence (B36)",
    "B37":"Sicilian defence (B37)",
    "B38":"Sicilian defence (B38)",
    "B39":"Sicilian defence (B39)",
    "B40":"Sicilian defence (B40)",
    "B41":"Sicilian defence (B41)",
    "B44":"Sicilian defence (B44)",
    "B43":"Sicilian defence (B43)",
    "B44":"Sicilian defence (B44)",
    "B45":"Sicilian defence (B45)",
    "B46":"Sicilian defence (B46)",
    "B47":"Sicilian defence (B47)",
    "B48":"Sicilian defence (B48)",
    "B49":"Sicilian defence (B49)",
    "B50":"Sicilian defence (B50)",
    "B51":"Sicilian defence (B51)",
    "B52":"Sicilian defence (B52)",
    "B53":"Sicilian defence (B53)",
    "B54":"Sicilian defence (B54)",
    "B55":"Sicilian defence (B55)",
    "B56":"Sicilian defence (B56)",
    "B57":"Sicilian defence (B57)",
    "B58":"Sicilian defence (B58)",
    "B59":"Sicilian defence (B59)",
    "B60":"Sicilian defence (B60)",
    "B61":"Sicilian defence (B61)",
    "B66":"Sicilian defence (B66)",
    "B63":"Sicilian defence (B63)",
    "B64":"Sicilian defence (B64)",
    "B65":"Sicilian defence (B65)",
    "B66":"Sicilian defence (B66)",
    "B67":"Sicilian defence (B67)",
    "B68":"Sicilian defence (B68)",
    "B69":"Sicilian defence (B69)",
    "B70":"Sicilian defence (B70)",
    "B71":"Sicilian defence (B71)",
    "B77":"Sicilian defence (B77)",
    "B73":"Sicilian defence (B73)",
    "B74":"Sicilian defence (B74)",
    "B75":"Sicilian defence (B75)",
    "B76":"Sicilian defence (B76)",
    "B77":"Sicilian defence (B77)",
    "B78":"Sicilian defence (B78)",
    "B79":"Sicilian defence (B79)",
    "B80":"Sicilian defence (B80)",
    "B81":"Sicilian defence (B81)",
    "B88":"Sicilian defence (B88)",
    "B83":"Sicilian defence (B83)",
    "B84":"Sicilian defence (B84)",
    "B85":"Sicilian defence (B85)",
    "B86":"Sicilian defence (B86)",
    "B87":"Sicilian defence (B87)",
    "B88":"Sicilian defence (B88)",
    "B89":"Sicilian defence (B89)",
    "B90":"Sicilian defence (B90)",
    "B91":"Sicilian defence (B91)",
    "B99":"Sicilian defence (B99)",
    "B93":"Sicilian defence (B93)",
    "B94":"Sicilian defence (B94)",
    "B95":"Sicilian defence (B95)",
    "B96":"Sicilian defence (B96)",
    "B97":"Sicilian defence (B97)",
    "B98":"Sicilian defence (B98)",
    "B99":"Sicilian defence (B99)",
    "C00":"French defence (C00)",
    "C01":"French defence (C01)",
    "C02":"French defence (C02)",
    "C03":"French defence (C03)",
    "C04":"French defence (C04)",
    "C05":"French defence (C05)",
    "C06":"French defence (C06)",
    "C07":"French defence (C07)",
    "C08":"French defence (C08)",
    "C09":"French defence (C09)",
    "C10":"French defence (C10)",
    "C11":"French defence (C11)",
    "C12":"French defence (C12)",
    "C13":"French defence (C13)",
    "C14":"French defence (C14)",
    "C15":"French defence (C15)",
    "C16":"French defence (C16)",
    "C17":"French defence (C17)",
    "C18":"French defence (C18)",
    "C19":"French defence (C19)",
    "C20":"King's pawn game",
    "C21":"Centre game (C21)",
    "C22":"Centre game (C22)",
    "C23":"Bishop's opening (C23)",
    "C24":"Bishop's opening (C24)",
    "C25":"Vienna game (C25)",
    "C26":"Vienna game (C26)",
    "C27":"Vienna game (C27)",
    "C28":"Vienna game (C28)",
    "C29":"Vienna game (C29)",
    "C30":"King's gambit (C30)",
    "C31":"King's gambit (C31)",
    "C32":"King's gambit (C32)",
    "C33":"King's gambit (C33)",
    "C34":"King's gambit (C34)",
    "C35":"King's gambit (C35)",
    "C36":"King's gambit (C36)",
    "C37":"King's gambit (C37)",
    "C38":"King's gambit (C38)",
    "C39":"King's gambit (C39)",
    "C40":"King's knight opening",
    "C41":"Philidor's defence",
    "C42-C43":"Petrov's defence",
    "C44":"King's pawn game",
    "C45":"Scotch game",
    "C46":"Three knights game",
    "C47":"Four knights, Scotch variation (C47)",
    "C48":"Four knights, Scotch variation (C48)",
    "C49":"Four knights, Scotch variation (C49)",
    "C50":"King's pawn game",
    "C51":"Evans gambit (C51)",
    "C52":"Evans gambit (C52)",
    "C53":"Giuoco Piano (C53)",
    "C54":"Giuoco Piano (C54)",
    "C55":"Two knights defence (C55)",
    "C56":"Two knights defence (C56)",
    "C57":"Two knights defence (C57)",
    "C58":"Two knights defence (C58)",
    "C59":"Two knights defence (C59)",
    "C60":"Ruy Lopez (Spanish opening) (C60)",
    "C61":"Ruy Lopez (Spanish opening) (C61)",
    "C62":"Ruy Lopez (Spanish opening) (C62)",
    "C63":"Ruy Lopez (Spanish opening) (C63)",
    "C64":"Ruy Lopez (Spanish opening) (C64)",
    "C65":"Ruy Lopez (Spanish opening) (C65)",
    "C66":"Ruy Lopez (Spanish opening) (C66)",
    "C67":"Ruy Lopez (Spanish opening) (C67)",
    "C68":"Ruy Lopez (Spanish opening) (C68)",
    "C69":"Ruy Lopez (Spanish opening) (C69)",
    "C70":"Ruy Lopez (Spanish opening) (C70)",
    "C71":"Ruy Lopez (Spanish opening) (C71)",
    "C72":"Ruy Lopez (Spanish opening) (C72)",
    "C73":"Ruy Lopez (Spanish opening) (C73)",
    "C74":"Ruy Lopez (Spanish opening) (C74)",
    "C75":"Ruy Lopez (Spanish opening) (C75)",
    "C76":"Ruy Lopez (Spanish opening) (C76)",
    "C77":"Ruy Lopez (Spanish opening) (C77)",
    "C78":"Ruy Lopez (Spanish opening) (C78)",
    "C79":"Ruy Lopez (Spanish opening) (C79)",
    "C80":"Ruy Lopez (Spanish opening) (C80)",
    "C81":"Ruy Lopez (Spanish opening) (C81)",
    "C82":"Ruy Lopez (Spanish opening) (C82)",
    "C83":"Ruy Lopez (Spanish opening) (C83)",
    "C84":"Ruy Lopez (Spanish opening) (C84)",
    "C85":"Ruy Lopez (Spanish opening) (C85)",
    "C86":"Ruy Lopez (Spanish opening) (C86)",
    "C87":"Ruy Lopez (Spanish opening) (C87)",
    "C88":"Ruy Lopez (Spanish opening) (C88)",
    "C89":"Ruy Lopez (Spanish opening) (C89)",
    "C90":"Ruy Lopez (Spanish opening) (C90)",
    "C91":"Ruy Lopez (Spanish opening) (C91)",
    "C92":"Ruy Lopez (Spanish opening) (C92)",
    "C93":"Ruy Lopez (Spanish opening) (C93)",
    "C94":"Ruy Lopez (Spanish opening) (C94)",
    "C95":"Ruy Lopez (Spanish opening) (C95)",
    "C96":"Ruy Lopez (Spanish opening) (C96)",
    "C97":"Ruy Lopez (Spanish opening) (C97)",
    "C98":"Ruy Lopez (Spanish opening) (C98)",
    "C99":"Ruy Lopez (Spanish opening) (C99)",
    "D00":"Queen's pawn game",
    "D01":"Richter-Veresov attack",
    "D02":"Queen's pawn game",
    "D03":"Torre attack (Tartakower variation)",
    "D04":"Queen's pawn game (D04)",
    "D05":"Queen's pawn game (D05)",
    "D06":"Queen's Gambit",
    "D07":"Queen's Gambit Declined, Chigorin defence (D07)",
    "D08":"Queen's Gambit Declined, Chigorin defence (D08)",
    "D09":"Queen's Gambit Declined, Chigorin defence (D09)",
    "D11":"Queen's Gambit Declined Slav defence (D11)",
    "D12":"Queen's Gambit Declined Slav defence (D12)",
    "D13":"Queen's Gambit Declined Slav defence (D13)",
    "D14":"Queen's Gambit Declined Slav defence (D14)",
    "D15":"Queen's Gambit Declined Slav defence (D15)",
    "D16":"Queen's Gambit Declined Slav accepted, Alapin variation",
    "D17":"Queen's Gambit Declined Slav, Czech defence (D17)",
    "D18":"Queen's Gambit Declined Slav, Czech defence (D18)",
    "D19":"Queen's Gambit Declined Slav, Czech defence (D19)",
    "D20":"Queen's gambit accepted (D20)",
    "D21":"Queen's gambit accepted (D21)",
    "D22":"Queen's gambit accepted (D22)",
    "D23":"Queen's gambit accepted (D23)",
    "D24":"Queen's gambit accepted (D24)",
    "D25":"Queen's gambit accepted (D25)",
    "D26":"Queen's gambit accepted (D26)",
    "D27":"Queen's gambit accepted (D27)",
    "D28":"Queen's gambit accepted (D28)",
    "D29":"Queen's gambit accepted (D29)",
    "D30":"Queen's gambit declined (D30)",
    "D31":"Queen's gambit declined (D31)",
    "D32":"Queen's gambit declined (D32)",
    "D33":"Queen's gambit declined (D33)",
    "D34":"Queen's gambit declined (D34)",
    "D35":"Queen's gambit declined (D35)",
    "D36":"Queen's gambit declined (D36)",
    "D37":"Queen's gambit declined (D37)",
    "D38":"Queen's gambit declined (D38)",
    "D39":"Queen's gambit declined (D39)",
    "D40":"Queen's gambit declined (D40)",
    "D41":"Queen's gambit declined (D41)",
    "D42":"Queen's gambit declined (D42)",
    "D43":"Queen's Gambit Declined semi-Slav (D43)",
    "D44":"Queen's Gambit Declined semi-Slav (D44)",
    "D45":"Queen's Gambit Declined semi-Slav (D45)",
    "D46":"Queen's Gambit Declined semi-Slav (D46)",
    "D47":"Queen's Gambit Declined semi-Slav (D47)",
    "D48":"Queen's Gambit Declined semi-Slav (D48)",
    "D49":"Queen's Gambit Declined semi-Slav (D49)",
    "D50":"Queen's Gambit Declined, 4.Bg5 (D50)",
    "D51":"Queen's Gambit Declined, 4.Bg5 (D51)",
    "D52":"Queen's Gambit Declined, 4.Bg5 (D52)",
    "D53":"Queen's Gambit Declined, 4.Bg5 (D53)",
    "D54":"Queen's Gambit Declined, 4.Bg5 (D54)",
    "D55":"Queen's Gambit Declined, 4.Bg5 (D55)",
    "D56":"Queen's Gambit Declined, 4.Bg5 (D56)",
    "D57":"Queen's Gambit Declined, 4.Bg5 (D57)",
    "D58":"Queen's Gambit Declined, 4.Bg5 (D58)",
    "D59":"Queen's Gambit Declined, 4.Bg5 (D59)",
    "D60":"Queen's Gambit Declined, 4.Bg5 (D60)",
    "D61":"Queen's Gambit Declined, 4.Bg5 (D61)",
    "D62":"Queen's Gambit Declined, 4.Bg5 (D62)",
    "D63":"Queen's Gambit Declined, 4.Bg5 (D63)",
    "D64":"Queen's Gambit Declined, 4.Bg5 (D64)",
    "D65":"Queen's Gambit Declined, 4.Bg5 (D65)",
    "D66":"Queen's Gambit Declined, 4.Bg5 (D66)",
    "D67":"Queen's Gambit Declined, 4.Bg5 (D67)",
    "D68":"Queen's Gambit Declined, 4.Bg5 (D68)",
    "D69":"Queen's Gambit Declined, 4.Bg5 (D69)",
    "D70":"Neo-Gruenfeld defence (D70)",
    "D71":"Neo-Gruenfeld defence (D71)",
    "D72":"Neo-Gruenfeld defence (D72)",
    "D73":"Neo-Gruenfeld defence (D73)",
    "D74":"Neo-Gruenfeld defence (D74)",
    "D75":"Neo-Gruenfeld defence (D75)",
    "D76":"Neo-Gruenfeld defence (D76)",
    "D77":"Neo-Gruenfeld defence (D77)",
    "D78":"Neo-Gruenfeld defence (D78)",
    "D79":"Neo-Gruenfeld defence (D79)",
    "D80":"Gruenfeld defence (D80)",
    "D81":"Gruenfeld defence (D81)",
    "D82":"Gruenfeld defence (D82)",
    "D83":"Gruenfeld defence (D83)",
    "D84":"Gruenfeld defence (D84)",
    "D85":"Gruenfeld defence (D85)",
    "D86":"Gruenfeld defence (D86)",
    "D87":"Gruenfeld defence (D87)",
    "D88":"Gruenfeld defence (D88)",
    "D89":"Gruenfeld defence (D89)",
    "D90":"Gruenfeld defence (D90)",
    "D91":"Gruenfeld defence (D91)",
    "D92":"Gruenfeld defence (D92)",
    "D93":"Gruenfeld defence (D93)",
    "D94":"Gruenfeld defence (D94)",
    "D95":"Gruenfeld defence (D95)",
    "D96":"Gruenfeld defence (D96)",
    "D97":"Gruenfeld defence (D97)",
    "D98":"Gruenfeld defence (D98)",
    "D99":"Gruenfeld defence (D99)",
    "E00":"Queen's pawn game",
    "E01":"Catalan, closed (E01)",
    "E02":"Catalan, closed (E02)",
    "E03":"Catalan, closed (E03)",
    "E04":"Catalan, closed (E04)",
    "E05":"Catalan, closed (E05)",
    "E06":"Catalan, closed (E06)",
    "E07":"Catalan, closed (E07)",
    "E08":"Catalan, closed (E08)",
    "E09":"Catalan, closed (E09)",
    "E10":"Queen's pawn game",
    "E11":"Bogo-Indian defence",
    "E12":"Queen's Indian defence",
    "E20":"Nimzo-Indian defence (E20)",
    "E21":"Nimzo-Indian defence (E21)",
    "E22":"Nimzo-Indian defence (E22)",
    "E23":"Nimzo-Indian defence (E23)",
    "E24":"Nimzo-Indian defence (E24)",
    "E25":"Nimzo-Indian defence (E25)",
    "E26":"Nimzo-Indian defence (E26)",
    "E27":"Nimzo-Indian defence (E27)",
    "E28":"Nimzo-Indian defence (E28)",
    "E29":"Nimzo-Indian defence (E29)",
    "E30":"Nimzo-Indian defence (E30)",
    "E31":"Nimzo-Indian defence (E31)",
    "E32":"Nimzo-Indian defence (E32)",
    "E33":"Nimzo-Indian defence (E33)",
    "E34":"Nimzo-Indian defence (E34)",
    "E35":"Nimzo-Indian defence (E35)",
    "E36":"Nimzo-Indian defence (E36)",
    "E37":"Nimzo-Indian defence (E37)",
    "E38":"Nimzo-Indian defence (E38)",
    "E39":"Nimzo-Indian defence (E39)",
    "E40":"Nimzo-Indian defence (E40)",
    "E41":"Nimzo-Indian defence (E41)",
    "E42":"Nimzo-Indian defence (E42)",
    "E43":"Nimzo-Indian defence (E43)",
    "E44":"Nimzo-Indian defence (E44)",
    "E45":"Nimzo-Indian defence (E45)",
    "E46":"Nimzo-Indian defence (E46)",
    "E47":"Nimzo-Indian defence (E47)",
    "E48":"Nimzo-Indian defence (E48)",
    "E49":"Nimzo-Indian defence (E49)",
    "E50":"Nimzo-Indian defence (E50)",
    "E51":"Nimzo-Indian defence (E51)",
    "E52":"Nimzo-Indian defence (E52)",
    "E53":"Nimzo-Indian defence (E53)",
    "E54":"Nimzo-Indian defence (E54)",
    "E55":"Nimzo-Indian defence (E55)",
    "E56":"Nimzo-Indian defence (E56)",
    "E57":"Nimzo-Indian defence (E57)",
    "E58":"Nimzo-Indian defence (E58)",
    "E59":"Nimzo-Indian defence (E59)",
    "E60":"King's Indian defence (E60)",
    "E61":"King's Indian defence (E61)",
    "E62":"King's Indian defence (E62)",
    "E63":"King's Indian defence (E63)",
    "E64":"King's Indian defence (E64)",
    "E65":"King's Indian defence (E65)",
    "E66":"King's Indian defence (E66)",
    "E67":"King's Indian defence (E67)",
    "E68":"King's Indian defence (E68)",
    "E69":"King's Indian defence (E69)",
    "E70":"King's Indian defence (E70)",
    "E71":"King's Indian defence (E71)",
    "E72":"King's Indian defence (E72)",
    "E73":"King's Indian defence (E73)",
    "E74":"King's Indian defence (E74)",
    "E75":"King's Indian defence (E75)",
    "E76":"King's Indian defence (E76)",
    "E77":"King's Indian defence (E77)",
    "E78":"King's Indian defence (E78)",
    "E79":"King's Indian defence (E79)",
    "E80":"King's Indian defence (E80)",
    "E81":"King's Indian defence (E81)",
    "E82":"King's Indian defence (E82)",
    "E83":"King's Indian defence (E83)",
    "E84":"King's Indian defence (E84)",
    "E85":"King's Indian defence (E85)",
    "E86":"King's Indian defence (E86)",
    "E87":"King's Indian defence (E87)",
    "E88":"King's Indian defence (E88)",
    "E89":"King's Indian defence (E89)",
    "E90":"King's Indian defence (E90)",
    "E91":"King's Indian defence (E91)",
    "E92":"King's Indian defence (E92)",
    "E93":"King's Indian defence (E93)",
    "E94":"King's Indian defence (E94)",
    "E95":"King's Indian defence (E95)",
    "E96":"King's Indian defence (E96)",
    "E97":"King's Indian defence (E97)",
    "E98":"King's Indian defence (E98)",
    "E99":"King's Indian defence (E79)",
  };
