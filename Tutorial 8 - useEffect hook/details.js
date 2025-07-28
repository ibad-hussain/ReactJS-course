// useEffect hook

// useEffect function includes:
    // first --> side-effect function (main logic)
    // second --> clean-up function (function to remove or perform something when a component unmounted/removed/deleted)
    // third --> comma separated dependencies list (entities which are updated and then side-effect function executes)

// Variations in useEffect hook
    // Variation 1 : Runs on every render
    // Variation 2 : Runs on only first render
    // Variation 3 : Runs when single dependency renders
    // Variation 4 : Runs when multiple dependencies renders
    // Variation 5 : Used clean-up function