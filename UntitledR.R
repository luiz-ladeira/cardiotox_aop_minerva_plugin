devtools::install_git(url = "https://gitlab.lcsb.uni.lu/minerva/minervar")
library(minervar)

# Load all required packages
library(minervar)
library(dplyr)
library(purrr)
library(tidyr)


# Get the contents of the Liver Lipid Metabolism physiological map
liver_lipid <- minervar::get_map_components("https://ontox.elixir-luxembourg.org/minerva/api/", project_id = "cardiotox_aop")

# Access data
lipid_map_ids <- as.character(695)
df <- map_df(lipid_map_ids, ~liver_lipid$map_elements[[.x]])


# Keep only columns 12 and 26
df_subset <- df[, c("elementId", "name")]

# Save as TSV (tab-separated values)
write.table(df_subset, file = "bioentities.tsv", sep = "\t", quote = FALSE, row.names = FALSE)

