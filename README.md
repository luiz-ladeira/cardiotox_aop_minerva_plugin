---
title: "KE Methods Mapper Plugin – Documentation"
author: "Luiz Ladeira"
date: "2025_09_23"
output: html_document
---

# Introduction

The **KE Methods Mapper Plugin** is an extension for **MINERVA v18 or higher**.\
It loads a Google Sheet containing Key Event (KE) and their quantification methods catalog mined from AOP-Wiki data, displays it in a searchable table, and highlights the corresponding BioEntities directly in the displayed map.

Main features:

-   Automatic fetch of KE data from Google Sheets.\
-   Searchable and filterable KE table.\
-   Direct highlighting of KE-related BioEntities in MINERVA maps.\
-   Links to external data sources (URLs embedded in the sheet).\
-   "Access data" shortcut to the original Google Sheet.\
-   "Clean" button to reset highlights and filters.

------------------------------------------------------------------------

# Dependencies

The plugin relies on:

-   **Minerva API (v18+)**\
-   **Google Sheets API v4**\
-   **jQuery**\
-   Custom CSS styles (`styles.css`)

------------------------------------------------------------------------

# Configuration

The plugin is configured to use a fixed Google Sheet:

-   **Column used for mapping KE names to BioEntities**:\
    `ke_name`

------------------------------------------------------------------------

# Usage

When loaded in MINERVA:

1.  A panel with the KE table is rendered.\
2.  You can **search** through the KE table.\
3.  Clicking on a KE row highlights the corresponding BioEntity in the map.\
4.  **Access data** button opens the Google Sheet.\
5.  **Clean** button removes all highlights and resets filters.\
6.  By default, all KEs with a match in the BioEntities list are highlighted.

------------------------------------------------------------------------

# Error Handling

-   If the Google Sheet fetch fails → an error message is displayed in the plugin container.\
-   If Minerva version \< 18 → an alert notifies the user that the plugin requires Minerva v18+.

------------------------------------------------------------------------

# Versioning

-   **Plugin name**: KE Methods Mapper\

-   **Version**: 1.0.0\

-   **Author**: Luiz Ladeira

-   This work is based on previous development by Hesam Korki - <https://github.com/HesamKorki>

------------------------------------------------------------------------

# Licencing

-   **CC BY 4.0**: Attribution 4.0 International\

------------------------------------------------------------------------

# References

-   [Minerva API documentation](https://minerva.pages.uni.lu/doc/)\
-   [Google Sheets API v4](https://developers.google.com/sheets/api)
