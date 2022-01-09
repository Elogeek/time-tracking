<?php
require_once "../vendor/autoload.php";
use RedBeanPHP\R;
use RedBeanPHP\RedException\SQL;

R::setup("mysql:host=localhost;dbname=redbean-dev","dev", "dev");

// Create a table

$project = R::dispense('project');

// Add datas in the table project
$project->name = "Mon super project test";
$project->price = 500;

try {
    $insertId = R::store($project);
}
catch(SQL $e) {
    echo " Une erreur est survenue en enregistrant la table en BDD";
}

echo $project;