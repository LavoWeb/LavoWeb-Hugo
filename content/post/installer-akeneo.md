---
title: "Installer Akeneo"
date: 2015-05-08
draft: false
aliases: [
    "/installer-akeneo.html.2",
    "/installer-akeneo.html.1",
    "/installer-akeneo.html"
]
tags: [
   "akeneo",
   "pim"
]
---
Un article très court pour installer Akeno, un PIM qui fait parler de lui !


## Installation du PIM

```
sudo -u www-data composer create-project –prefer-dist akeneo/pim-community-standard ./akeneo-dedi « 1.2.*@stable »
cd ./akeneo-dedi
sudo -u www-data composer install
sudo -u www-data app/console pim:install
sudo -u www-data app/console cache:clear
sudo -u www-data rm -f web/install.php
```
## Installation du connecteur Magento

```
sudo apt-get install libssh2-php
sudo -u www-data composer require akeneo/magento-connector-bundle:1.2.*
sudo -u www-data composer config repositories.dndmcd vcs http://github.com/Agence-DnD/DnD-MagentoConnectorBundle.git
sudo -u www-data composer require agencednd/magento-connector-bundle
sudo -u www-data composer update
sudo -u www-data php app/console doctrine:schema:update –force
```

ajouter **$bundles[] = new Pim\Bundle\MagentoConnectorBundle\PimMagentoConnectorBundle();** dans **app/AppKernel.php**

ajouter **$bundles[] = new DnD\Bundle\MagentoConnectorBundle\DnDMagentoConnectorBundle();** dans **app/AppKernel.php**

```
sudo -u www-data php app/console pim:installer:assets
sudo -u www-data app/console cache:clear
```

## Installation du connecteur Excel

```
sudo -u www-data composer require –prefer-dist « akeneo/spreadsheet-parser-bundle »
sudo -u www-data composer require –prefer-dist « akeneo/excel-connector-bundle »
sudo -u www-data composer update
```

ajouter **$bundles[] = new Akeneo\Bundle\SpreadsheetParserBundle\AkeneoSpreadsheetParserBundle();**

ajouter **new Akeneo\Bundle\SpreadsheetParserBundle\AkeneoSpreadsheetParserBundle()**, dans **getPimDependenciesBundles**

ajouter **new Pim\Bundle\ExcelConnectorBundle\PimExcelConnectorBundle()**, dans **getPimDependenciesBundles**